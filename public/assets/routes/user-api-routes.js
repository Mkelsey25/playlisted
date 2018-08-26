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

    if (req.query.song_id) {
      query.SongId = req.query.song_id;
    }

    db.Users.findAll({
      where: query
    }).then(function(dbResult) {
      res.json(dbResult);
    });
  });

  // GET route for retrieving a single user
  app.get("/api/users/:id", function(req, res) {
    db.Users.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbResult) {
      res.json(dbResult);
    });
  });

  // POST route for saving new user
  app.post("/api/users", function(req, res) {
    db.Users.create(req.body).then(function(dbResult) {
      res.json(dbResult);
    });
  });

  // DELETE route for deleting a user
  app.delete("/api/users/:id", function(req, res) {
    db.Users.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbResult) {
      res.json(dbResult);
    });
  });

  // PUT route for updating
  app.put("/api/users", function(req, res) {
    db.Users.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbResult) {
        res.json(dbResult);
    });
  });
};
