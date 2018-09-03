///////////////////////////////////////////////////////////////////////////////////////////////////
// File Name: user-api-routes.js 
//
// Description: This file offers a set of routes for displaying and saving user data to the db
///////////////////////////////////////////////////////////////////////////////////////////////////
var passport = require('passport')
, LocalStrategy = require('passport-local').Strategy;
var flash = require('connect-flash');
// Requiring our models
var db = require("../../../models");



/////////////////
// Routes
/////////////////
module.exports = function(app) {

/*
  ///////////////////////////////////////////////////////
  // GET route for authenticating users (passport-spotify)
  ///////////////////////////////////////////////////////
  app.get('/auth/spotify', passport.authenticate('spotify'), function(req, res) {
    // The request will be redirected to spotify for authentication, so this
    // function will not be called.
  });
  
  app.get(
    '/auth/spotify/callback',
    passport.authenticate('spotify', { failureRedirect: '/login' }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect('/');
    }
  );
*/

  /////////////////////////////////////////////
  // GET route for getting ALL of the users
  /////////////////////////////////////////////
  app.get("/api/users", function(req, res) {
    var query = {};

    console.log("route: all users");
    console.log(JSON.stringify(req.body));

    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    };

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
  //////Psuedo-code
  //Add passport authenticate to api/users
  // change to api/users/successjson to homepage(need to add check profile button) 
  //instead of 

  /////////////////////////////////////////////
  // POST route for CREATE a new user
  /////////////////////////////////////////////
  


   /* passport.use(new LocalStrategy({usernameField: 'user_name',
    passwordField: 'user_password'},
      function(username, password, done) {
        db.Users.findOne({ user_name: req.body.user_name }, function(err, user) {
          if (err) console.log("ERROR MAN");
          else if (user) {
              console.log("This Username is already taken.");
          }
          else if (!user_name) {
            app.post("/api/users", function(req, res) { 
              console.log("Username is available!")
              db.Users.create(req.body).then(function(dbResult) {
                console.log("USER CREATED");
      
                res.json(dbResult);
              })
            });
            //return done(null, user);

          }
        });
      }
    ));*/
    app.post('/api/users', function(req, res) {
      db.Users.findOne({where: {user_name: req.body.user_name}}).then(function(err, user){
      if(err) {
      console.log("ERROR AT START");
      }
      else if (user) {
        console.log('This user already exists.');
        throw err;
      } 
      else {
        console.log("Username is available!")
        db.Users.create(req.body).then(function(dbResult) {
          console.log("USER CREATED");

          res.json(dbResult);

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
        to: 'mkelsey2557@gmail.com', // list of receivers
        subject: 'Hello', // Subject line
        text: 'Hello world?', // plain text body
        html: '<b>Hello world?</b>' // html body
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

          })
        }
      
        /*passport.authenticate('local', (req, res, function() {
            console.log("AUTHENTICATED");

          
        }))*/
    
    })
  })

      /*var newUser = new User ({
        user_name: req.body.user_name,
        user_password: req.body.user_password
      });*/
     // var takenUsername =  db.Users.findOne({where: {
       // user_name: newUser.user_name
     // }}
   // );

      //change to redirect login/errormessage


////////////////////////////////////////////////////////////////////
      /*db.Users.register(req.body, req.body.user_password, function(err, user) {
        if(err) {
          console.log("ERROR ON REGISTER");
          //req.flash("error", err.message);
          //res.redirect('back');
          //return res.render("/login");
        }
        else {
          passport.authenticate("local")(req, res, function() {
            console.log("ERROR ON AUTHENTICATION");
           // req.flash("success", "Welcome, " + user.user_name);
            //res.redirect('/homepage');
            console.log(req.body.user_name);

            console.log("route: create user");
            console.log(JSON.stringify(req.body));
        
            db.Users.create(req.body).then(function(dbResult) {
              console.log("User created.");
        
              res.json(dbResult);          // send as json
              console.log("ERROR ON JSON RES");
            });
          });
        }
      });*/

   

 // });

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