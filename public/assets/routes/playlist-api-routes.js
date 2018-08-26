///////////////////////////////////////////////////////////////////////////////////////////////////
// File Name: playlist-api-routes.js 
//
// Description: This file offers a set of routes for displaying and saving playlist data to the db
///////////////////////////////////////////////////////////////////////////////////////////////////

// Requiring our models
var db = require("./../../../models");

/////////////////
// Routes
/////////////////
module.exports = function(app) {

  // GET route for getting all of the playlists
  app.get("/api/playlists", function(req, res) {
    var query = {};

    if (req.query.playlist_id) {
      query.PlaylistId = req.query.playlist_id;
    }

    // "include" property in our findAll query to include users
    // set the value to an array of the models we want to include in a left outer join
    // In this case, just db.User
    db.Playlist.findAll({
      where: query
      // ,
      //include: [db.User]
    }).then(function(dbResult) {
      res.json(dbResult);
    });
  });

  // GET route for retrieving a single playlist
  app.get("/api/playlists/:id", function(req, res) {
    // set the value to an array of the models we want to include in a left outer join
    db.Playlist.findOne({
      where: {
        id: req.params.id
      }
      // ,
      // include: [db.User]
    }).then(function(dbResult) {
      res.json(dbResult);
    });
  });

  // POST route for saving new playlist
  app.post("/api/playlists", function(req, res) {
    db.Playlist.create(req.body).then(function(dbResult) {
      res.json(dbResult);
    });
  });

  // DELETE route for deleting a playlist
  app.delete("/api/playlists/:id", function(req, res) {
    db.Playlist.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbResult) {
      res.json(dbResult);
    });
  });

  // PUT route for updating a playlist
  app.put("/api/playlists", function(req, res) {
    db.Playlist.update(
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
