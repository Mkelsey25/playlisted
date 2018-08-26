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

  // GET route for getting all of the users
  app.get("/api/users", function(req, res) {
    var query = {};

    console.log("in all users get route");

    if (req.query.song_id) {
      query.UserId = req.query.user_id;
    }

    db.Users.findAll({
      where: query
    }).then(function(dbResult) {
      // send as JSON
      // res.json(dbResult);

      // send to handlebars
      var hbsObject = {
        users: dbResult
      };
      res.render("index", hbsObject);
    });
  });

  // GET route for retrieving a single user
  app.get("/api/users/:id", function(req, res) {

    console.log("in a users get route");

    db.Users.findOne({
      where: {
        user_id: req.params.id
      }
    }).then(function(dbResult) {
      // send to JSON
      // res.json(dbResult);

      // send to handlebars
      var hbsObject = {
        users: dbResult
      };
      console.log(dbResult);
      res.render("index", hbsObject);
    });
  });

  // POST route for saving new user
  app.post("/api/users", function(req, res) {
    db.Users.create(req.body).then(function(dbResult) {
      console.log("User created.");

      res.json(dbResult);
    });
  });

  // DELETE route for deleting a user
  app.delete("/api/users/:id", function(req, res) {
    db.Users.destroy({
      where: {
        user_id: req.params.id
      }
    }).then(function(dbResult) {
      res.json(dbResult);
    });
  });

  // PUT route for updating
  app.put("/api/users/", function(req, res) {

    db.Users.update(
      req.body,
      {
        where: {
          user_id: req.body.id
        }
      }).then(function(dbResult) {
        res.json(dbResult);
    });
  });
};
