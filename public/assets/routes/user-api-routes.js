///////////////////////////////////////////////////////////////////////////////////////////////////
// File Name: user-api-routes.js 
//
// Description: This file offers a set of routes for displaying and saving user data to the db
///////////////////////////////////////////////////////////////////////////////////////////////////

// Requiring our models
var db = require("./../../../models");

/////////////////
// Routes
/////////////////
module.exports = function(app) {

/*
  ///////////////////////////////////////////////////////
  // GET route for authenticating users (passport-spotify)
  ///////////////////////////////////////////////////////
  
  //Spotify auth route with scopes, currently returning 
  //user's Spotify email and private info
  //
  $("#spotifyLoginBtn").on("click", function() {
    app.get('/auth/spotify', passport.authenticate('spotify', {
      scope: ['user-read-email', 'user-read-private'],
      //force login dialog 
      showDialog: true
    }),
    function(req, res) {
      // The request will be redirected to spotify for authentication, so this
      // function will not be called.
    }
  );

  app.get(
    '/auth/spotify/callback',
    passport.authenticate('spotify', { failureRedirect: '/login' }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect('/');
    }
  );
  });
  
*/
  


  /////////////////////////////////////////////
  // GET route for getting ALL of the users
  /////////////////////////////////////////////
  app.get("/api/users", function(req, res) {
    var query = {};

    console.log("route: all users");
    console.log(JSON.stringify(req.body));

    // if (req.query.user_id) {
    //   query.UserId = req.query.user_id;
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
  app.post("/api/users", function(req, res) {

    console.log("route: create user");
    console.log(JSON.stringify(req.body));

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
                        user: 'mkelsey2557@gmail.com', // generated ethereal user
                        pass: 'Dundee#25' // generated ethereal password
                    }
                });
              
                // setup email data with unicode symbols
                var mailOptions = {
                    from: '"Morgan Hamlin" <mkelsey2557@gmail.com>', // sender address
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
      {
        user_name: req.body.user_name,
        user_email: req.body.user_email,
        user_password: req.body.user_password
      },
      {
        where: {
          user_id: id
        }
      }).then(function(dbResult) {
        res.json(dbResult);
    });
  });
};


  /////////////////////////////////////////////////////////////////////
  // res.status(404)        // HTTP status 404: NotFound
  // .send('Not found')
  /////////////////////////////////////////////////////////////////////