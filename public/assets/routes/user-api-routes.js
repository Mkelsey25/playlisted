///////////////////////////////////////////////////////////////////////////////////////////////////
// File Name: user-api-routes.js 
//
// Description: This file offers a set of routes for displaying and saving user data to the db
///////////////////////////////////////////////////////////////////////////////////////////////////

// Requiring our models
var db = require("./../../../models");
var passport = require('passport');

/////////////////
// Routes
/////////////////
module.exports = function(app) {


  ///////////////////////////////////////////////////////
  // GET route for authenticating users (passport-spotify)
  ///////////////////////////////////////////////////////
  
  app.get('/api/playlists/{playlistid}', ensureAuthenticated, function(req, res) {
    res.render('playlist.html', { user: req.user });
  })

  //Spotify auth route with scopes, currently returning 
  //user's Spotify email and private info
  //
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

  function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/login');
  }


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