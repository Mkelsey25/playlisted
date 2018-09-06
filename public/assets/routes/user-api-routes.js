///////////////////////////////////////////////////////////////////////////////////////////////////
// File Name: user-api-routes.js 
//
// Description: This file offers a set of routes for displaying and saving user data to the db
///////////////////////////////////////////////////////////////////////////////////////////////////

// Requiring our models
var db = require("./../../../models");
var passport = require('passport');
// const { check, validationResult } = require('express-validator/check');
var request = require('request');
var querystring = require('querystring');
/////////////////
// Routes
/////////////////
module.exports = function(app) {

  /////////////////////////////////////////////
  // GET route for getting ALL of the users
  /////////////////////////////////////////////
  app.get("/api/users", function(req, res) {
    var query = {};

    console.log("route: all users");
    console.log(JSON.stringify(req.body));

    // if (req.query.user_id) {
    //   query.user_id = req.query.user_id;
    // };

    db.Users.findAll({
      where: query
    }).then(function(dbResult) {
      // res.json(dbResult);          // send as json

      // send to handlebars
      var hbsObject = {
        users: dbResult
      };
      res.render("users", hbsObject);
    });
  });

  //////////////////////////   AUTH   ///////////////////////////////////////////////////////////////

  /////////////////////////////////////////////
  // GET route to LOGIN a user
  /////////////////////////////////////////////
  app.post("/api/users/login", function(req, res) {
    var query = {};
    var password = req.body.user_password;
    var loginType = req.body.login_type;
    console.log("loginType: " + loginType);

    console.log("route: login user");
    console.log(JSON.stringify(req.body));

    if (req.query.user_name) {
      query.user_name = req.query.user_name;
    } else {
      query.user_name = req.body.user_name;
    };

    ////////////////////////
    // login via bcrypt
    ////////////////////////
    if (loginType === "login") {
      console.log("in bcrypt login");

      db.Users.findOne({
        where: query
      }).then(async function(dbResult) {
        // res.json(dbResult);          // send as json

        if (!dbResult) {
          res.redirect('/login');
          console.log('NOT IN DATABASE');
        } else if (!await dbResult.validPassword(password)) {
          res.redirect('/login');
          console.log('INCORRECT PASSWORD');
        } else {
          req.session.user = dbResult;
          res.redirect('/');
        }
      });
      
        // send to handlebars
      //   var hbsUser = {
      //     user: dbResult
      //   };
      //   // console.log(dbResult);
      //   res.render("users", hbsUser);
      // });
    }; 

    ////////////////////////
    // login with spotify
    ////////////////////////
    if (loginType === "login-spotify") {
      console.log("in spotify login");
      res.redirect('https://accounts.spotify.com/authorize?' +
      querystring.stringify({
        response_type: 'code',
        client_id: process.env.SPOTIFY_CLIENT_ID,
        scope: 'user-read-private user-read-email',
        redirect_uri
      }));
    };

  });

  //////////////////////////   AUTH end   ///////////////////////////////////////////////////////////////
//access song's specific attributes (valence, etc.)
//fetch songs -- songs to songs table -- search in app through songs list 
// --move songs to playlist table

function spotifyAuth() {
/////////////////////////////////////
// configure spotify authentication
/////////////////////////////////////
//OAuth: A token is a special code that is a temporary key that we
//get in our backend server which is connected to your spotify app.

var redirect_uri = 
  process.env.REDIRECT_URI || 
  'http://localhost:8080/'


  app.get('/login', function(req, res) {
    /*res.redirect('https://accounts.spotify.com/authorize?' +
      querystring.stringify({
        response_type: 'code',
        client_id: process.env.SPOTIFY_CLIENT_ID,
        scope: 'user-read-private user-read-email',
        redirect_uri
      }));*/
  });
}

function spotifyToken() {
  //Back-end gets access token from Spotify and appends it to the callback URL
  app.get('/', function(req, res) {
    var code = req.query.code || null
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri,
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (new Buffer(
          process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET
        ).toString('base64'))
      },
      json: true
    }
    request.post(authOptions, function(error, response, body) {
      var access_token = body.access_token
      var uri = process.env.redirect_uri || 'http://localhost:8080'
      res.redirect(uri + '?access_token=' + access_token)
    });
  });
}

  /////////////////////////////////////////////
  // GET route for retrieving ONE user
  /////////////////////////////////////////////
  app.get("/api/users/:id", function(req, res) {

    console.log("route: specific user");
    console.log(JSON.stringify(req.body));

    db.Users.findAll({
      where: {
        user_id: req.params.id
      }
    }).then(function(dbResult) {
      // res.json(dbResult);          // send as json

      // send to handlebars
      var hbsUser = {
        user: dbResult
      };
      // console.log(dbResult);
      res.render("users", hbsUser);
    });
  });

  /////////////////////////////////////////////
  // POST route for CREATE a new user
  /////////////////////////////////////////////
  app.post("/api/users", 
  // [
  //     check('user_name').isLength({ min: 1, max: 50}),
  //     check('user_email').isEmail(),
  //     check('user_password').isLength({ min: 5 })
  //   ],  
    function(req, res) {

    console.log("route: create user");
    console.log(JSON.stringify(req.body));

    // Finds the validation errors in this request and wraps them in an object with handy functions
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   console.log(errors);
    //   return res.status(422).json({ errors: errors.array() });
    // }
    
    // call the model to create the user
    db.Users.create(req.body).then(function(dbResult) {
      console.log("User created.");

      res.json(dbResult);          // send as json

      ///////////////Nodemailer: Morgan

              //Nodemailer

              'use strict';
              var nodemailer = require('nodemailer');
              
              // Generate test SMTP service account from ethereal.email
              // Only needed if you don't have a real mail account for testing
              nodemailer.createTestAccount((err, account) => {
                // create reusable transporter object using the default SMTP transport
                var transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'playlistedapplication@gmail.com', 
                        pass: 'playlisted123' 
                    }
                });
              
                // setup email data with unicode symbols
                var mailOptions = {
                    from: '"Playlisted" <playlistedapplication@gmail.com>', // sender address
                    to: req.body.user_email, // list of receivers
                    subject: 'Welcome to Playlisted', // Subject line
                    text: 'Welcome to Playlisted. Enjoy the playlist of your dreams.', // plain text body
                    html: '<b>Welcome to Playlisted</b> <p>Your username is: </p>' + req.body.user_name // html body
                };
              
                // send mail with defined transport object
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        return console.log(error);
                    }
                    console.log('Message sent: %s', info.messageId);
                    // Preview only available when sending through an Ethereal account
              
                });
              });


    });
  });

  /*app.post('/api/users', function(req, res) {
    db.Users.findOne({where: {user_name: req.body.user_name}}).then(function(err, user){
    if(err) {
    console.log("ERROR AT START");
    }
    else if (user) {
      console.log('This user already exists.');
      throw err;
    } 
    else {
      console.log("Username is available!");
      db.Users.create(req.body).then(function(dbResult) {
        console.log("USER CREATED");

        res.json(dbResult);


                })
      }
  })
})*/

  /////////////////////////////////////////////
  // DELETE route for deleting a user
  /////////////////////////////////////////////
  app.delete("/api/users/:id", function(req, res) {
    
    console.log("route: delete a user");
    console.log(JSON.stringify(req.body));
    
    db.Users.destroy({
      where: {
        user_id: req.params.id        //req.body.id if send in body
      }
    }).then(function(dbResult) {
      console.log("after the deletion of user");

      res.json(dbResult);          // send as json
    });
  });

  /////////////////////////////////////////////
  // PUT route for UPDATE
  /////////////////////////////////////////////
  app.put("/api/users/:id", function(req, res) {

    console.log("route: update user");
    console.log(JSON.stringify(req.body));

    var id = (req.params.id) ? req.params.id : req.body.id;

    db.Users.update(
      req.body,
      {
        where: {
          user_id: id
        },
        individualHooks: true
      }).then(function(dbResult) {
        res.json(dbResult);
    });

  });

  //Morgan 

  /*app.get("/api/users/:id/playlists", function(req, res) {
    console.log("Individual User's Playlists");
    console.log(JSON.stringify(req.body));
    var id = (req.params.id) ? req.params.id : req.body.id;
    Needs to grab data from every playlist that belongs to the user along with songs.

  })*/
};

  /////////////////////////////////////////////////////////////////////
  // res.status(404)        // HTTP status 404: NotFound
  // .send('Not found')
  /////////////////////////////////////////////////////////////////////
