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

  /////////////////////////////////////////////
  // GET route for getting all of the playlists
  /////////////////////////////////////////////
  app.get("/api/playlists", function(req, res) {
    var query = {};

    console.log("route: all playlists");
    console.log(JSON.stringify(req.body));

    if (req.query.playlist_id) {
      query.PlaylistId = req.query.playlist_id;
    }

  // find all playlists
    db.Playlist.findAll({
      where: query
      ,
      include: [db.PlaylistSong]
    }).then(function(dbResult) {
      // res.json(dbResult);

      // send to handlebars
      var hbsObject = {
        playlist: dbResult
      };
      res.render("playlist", hbsObject);
    });
  });

  /////////////////////////////////////////////
  // GET route for retrieving a single playlist
    /////////////////////////////////////////////
  app.get("/api/playlists/:id", function(req, res) {

    console.log("route: specific playlist");
    console.log(JSON.stringify(req.body));

    // set the value to an array of the models we want to include in a left outer join
    db.Playlist.findAll({
      where: {
        playlist_id: req.params.id
      }
      // ,
      // include: [db.User]
    }).then(function(dbResult) {
      // res.json(dbResult);

      // send to handlebars
      var hbsPlaylist = {
        playlist: dbResult
      };
      // console.log(dbResult);
      res.render("playlist", hbsPlaylist); 
    });
  });

  /////////////////////////////////////////////
  // POST route for saving new playlist
  /////////////////////////////////////////////
  app.post("/api/playlists", function(req, res) {

    console.log("route: create playlist");
    console.log(JSON.stringify(req.body));

    db.Playlist.create(req.body).then(function(dbResult) {
      console.log("Playlist created.");

      res.json(dbResult);
    });
  });

  /////////////////////////////////////////////
  // DELETE route for deleting a playlist
  ///////////////////////////////////////////
  app.delete("/api/playlists/:id", function(req, res) {

    console.log("route: delete a playlist");
    console.log(JSON.stringify(req.body));

    db.Playlist.destroy({
      where: {
        playlist_id: req.params.id
      }
    }).then(function(dbResult) {
      console.log("after the deletion of playlist");

      res.json(dbResult);
    });
  });

  /////////////////////////////////////////////
  // PUT route for updating a playlist
  /////////////////////////////////////////////
  app.put("/api/playlists/:id", function(req, res) {

    console.log("route: update playlist");
    console.log(JSON.stringify(req.body));

    var id = (req.params.id) ? req.params.id : req.body.id;

    db.Playlist.update(
      req.body,
      {
        where: {
          playlist_id: id
        }
      }).then(function(dbResult) {
        res.json(dbResult);
    });
  });
};
