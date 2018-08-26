///////////////////////////////////////////////////////////////////////////////////////////////////
// File Name: song-api-routes.js 
//
// Description: This file offers a set of routes for displaying and saving song data to the db
///////////////////////////////////////////////////////////////////////////////////////////////////

// Requiring our models
var db = require("./../../../models");

/////////////////
// Routes
/////////////////
module.exports = function(app) {

  // GET route for getting all of the songs
  app.get("/api/songs", function(req, res) {
    var query = {};

    if (req.query.song_id) {
      query.SongId = req.query.song_id;
    }

    //find all songs
    db.Songs.findAll({
      where: query
    }).then(function(dbResult) {
      res.json(dbResult);
    });
  });

  // GET route for retrieving a single song
  app.get("/api/songs/:id", function(req, res) {
    db.Songs.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbResult) {
      res.json(dbResult);
    });
  });

  // POST route for saving new song
  app.post("/api/songs", function(req, res) {
    db.Songs.create(req.body).then(function(dbResult) {
      res.json(dbResult);
    });
  });

  // DELETE route for deleting a song
  app.delete("/api/songs/:id", function(req, res) {
    db.Songs.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbResult) {
      res.json(dbResult);
    });
  });

  // PUT route for updating
  app.put("/api/songs", function(req, res) {
    db.Songs.update(
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
