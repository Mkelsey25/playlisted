///////////////////////////////////////////////////////////////////////////////////////////////////
// File Name: user-api-routes.js 
//
// Description: This file offers a set of routes for displaying and saving user data to the db
///////////////////////////////////////////////////////////////////////////////////////////////////

// Requiring our models
var db = require("./../../../models");

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

  /////////////////////////////////////////////////
  // GET route to show the registration page
  /////////////////////////////////////////////////
  app.get("/register", function(req, res) {

    console.log("route: register");
    console.log(JSON.stringify(req.body));

    res.render("register");
  });
  
  /////////////////////////////////////
  // POST route to REGISTER a user
  ////////////////////////////////////
  app.post("/register/user", function(req, res) {
    
    console.log("route: register user");
    console.log(JSON.stringify(req.body));

    // call the model to create the user
    db.Users.create(req.body).then(function(dbResult) {
      console.log("User registered.");

      //////////////////////////////////////
      /////////////  Nodemailer: Morgan
      //////////////////////////////////////
      //Nodemailer
      {
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
                  // return console.log(error);
                  console.log(error);
              } else {
                console.log('Message sent to %s: %s', req.body.user_email, info.messageId);
                // Preview only available when sending through an Ethereal account
              }
          });
        });
      };
      /////////////////////////////////////////////////////////////////////////////////

      req.flash('success_msg', 'Registration successful! Welcome to the community.');
      res.json(dbResult);          // send as json

    }).catch(function (err) {
      console.log("do we get here: " + err);

      var errors = err.messageId + ": " + err.toString();

      // res.redirect('/sign-up');

      // send to handlebars

      var hbsObject = {
        users: req.body
      };
      req.flash('error_msg', err.toString());
      res.render("register", hbsObject);
    });

  });

  /////////////////////////////////////////////////
  // GET route to show the login page
  /////////////////////////////////////////////////
  app.get("/login", function(req, res) {

    console.log("route: login");
    console.log(JSON.stringify(req.body));

    res.render("login");
  });

  /////////////////////////////////////////////
  // POST route to LOGIN a user
  /////////////////////////////////////////////
  app.post("/login", function(req, res) {
    var query = {};
    var password = req.body.user_password;
    var loginType = req.body.login_type;
    console.log("loginType: " + loginType);

    console.log("route: login/authenticate user");
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

      // Validation
      req.checkBody('user_name', 'Username is required').notEmpty();
      req.checkBody('user_password', 'Password is required').notEmpty();

      var errors = req.validationErrors();
      
      if (errors) {
        req.flash('error_msg', "No user by that name found.");
        res.render("login", { errors: errors });
      } else {

        db.Users.findOne({
          where: query
        }).then(async function(dbResult) {
          // res.json(dbResult);          // send as json


      // var errors = err.messageId + ": " + err.toString();

      // // send to handlebars
      //   var hbsObject = {
      //   users: req.body
      // };
      // req.flash('error_msg', err.toString());
      // res.render("login", hbsObject);


          if (!dbResult) {
            console.log("no user found");

            req.flash('error_msg', "No user by that name found.");
            res.render("login", dbResult);

            // res.redirect('/login');
          } else if (!await dbResult.validPassword(password)) {
            console.log("invalid password");
            var hbsObject = {
              users: dbResult
            };
            req.flash('error_msg', "Invalid password.");
            res.render("login", hbsObject);

            // res.redirect('/login');
          } else {
            console.log("user is logged in.");
            req.session.user = dbResult;

            var hbsObject = {
              users: req.body
            };
            req.flash('success_msg', 'Login successful!');
            res.render("login", hbsObject);

            // res.redirect('/');
          }

        }).catch(function (err) {

//           if (!dbResult) {
//             console.log("no user found");
// // console.log(res.locals.error);

//             req.flash('error_msg', "No user by that name found.");
//             res.render("login", dbResult);
//             // res.json(dbResult);

//             // res.redirect('/login');
//           } else if (!await dbResult.validPassword(password)) {
//             console.log("invalid password");
//             var hbsObject = {
//               users: dbResult
//             };
//             req.flash('error_msg', "Invalid password.");
//             res.render("login", hbsObject);

//             // res.redirect('/login');
//           } else {
//             console.log("user is logged in.");
//             req.session.user = dbResult;

//             // req.flash('success_msg', 'Login successful!');
//             res.redirect('/');
//           }

          if (err) {
            console.log("catch login error: " + err);
            var errors = err.messageId + ": " + err.toString();
          } else {
            console.log("catch login error!");
          }
    
          // send to handlebars
            var hbsObject = {
            users: req.body
          };
          // req.flash('error_msg', err.toString());
          req.flash('error_msg', "No user found");
          res.render("login", hbsObject);
        });
      }

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

  ///////////////////////////////
  // GET route to LOGOUT a user
  ///////////////////////////////
  app.get("/api/users/logout", function(req, res) {
    console.log("route: logout");

    req.session.reset();
    res.redirect('/');
  });

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

//////////////////////////   AUTH end   ///////////////////////////////////////////////////////////////

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
  app.post("/api/users", function(req, res, next) {

    console.log("route: create user");
    console.log(JSON.stringify(req.body));

    // call the model to create the user
    db.Users.create(req.body).then(function(dbResult) {
      console.log("User created.");

      res.json(dbResult);          // send as json

    }).catch(function (err) {
      console.log("do we get here: " + err);

      res.render("users", {
        errors: err
      });
    });

  });

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
};
