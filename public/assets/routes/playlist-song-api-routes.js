///////////////////////////////////////////////////////////////////////////////////////////////////
// File Name: playlist-song-api-routes.js 
//
// Description: This file offers a set of routes for displaying and saving songs for a playlist 
//              to the db
///////////////////////////////////////////////////////////////////////////////////////////////////

// Requiring our models
var db = require("../../../models");

/////////////////
// Routes
/////////////////
module.exports = function(app) {

  ///////////////////////////////////////////////////////////////
  // GET route for getting all of the songs in a playlist
  ///////////////////////////////////////////////////////////////
  app.get("/api/playlists/:playlist_id/songs", function(req, res) {
    var query = {};

    console.log("route: all songs in playlist");
    console.log(JSON.stringify(req.body));

    console.log(req.params.playlist_id);


    if (req.params.playlist_id) {
      query.playlist_id = req.params.playlist_id;
    }

  // find all songs on a playlist
    db.PlaylistSong.findAll({
      where: query
      // ,
      //include: [db.User]
    }).then(function(dbResult) {
      // res.json(dbResult);

      // send to handlebars
      var hbsObject = {
        playlistsongs: dbResult
      };
      res.render("playlist-song", hbsObject);
    });
  });

  //////////////////////////////////////////////////////////////
  // GET route for retrieving a single song on a playlist
    //////////////////////////////////////////////////////////////
  app.get("/api/playlists/:playlist_id/songs/:id", function(req, res) {

    console.log("route: specific song on a playlist");
    console.log(JSON.stringify(req.body));

    // set the value to an array of the models we want to include in a left outer join
    db.PlaylistSong.findAll({
      where: {
        playlist_song_id: req.params.id
      }
      // ,
      // include: [db.User]
    }).then(function(dbResult) {
      // res.json(dbResult);

      // send to handlebars
      var hbsPlaylist = {
        playlistsong: dbResult
      };
      // console.log(dbResult);
      res.render("playlist-song", hbsPlaylist); 
    });
  });

  ////////////////////////////////////////////////////
  // POST route for saving new song to a playlist
  ////////////////////////////////////////////////////
  app.post("/api/playlists/:playlist_id/songs", function(req, res) {

    console.log("route: create song on playlist");
    console.log(JSON.stringify(req.body));

    db.PlaylistSong.create(req.body).then(function(dbResult) {
      console.log("Playlist song created.");

      res.json(dbResult);
    });
  });

  //////////////////////////////////////////////////////
  // DELETE route for deleting a song from a playlist
  //////////////////////////////////////////////////////
  app.delete("/api/playlists/:playlist_id/songs/:id", function(req, res) {

    console.log("route: delete a song from a playlist");
    console.log(JSON.stringify(req.body));

    db.PlaylistSong.destroy({
      where: {
        playlist_user_songs_id: req.params.id
      }
    }).then(function(dbResult) {
      console.log("after the deletion of song from a playlist");

      res.json(dbResult);
    });
  });

  /////////////////////////////////////////////
  // PUT route for updating a song on a playlist
  /////////////////////////////////////////////
  app.put("/api/playlists/:playlist_id/songs/:id", function(req, res) {

    console.log("route: update song on a playlist");
    console.log(JSON.stringify(req.body));

    var id = (req.params.id) ? req.params.id : req.body.id;

    // update playlist
    db.PlaylistSong.update(
      req.body,
      {
        where: {
          playlist_user_songs_id: id
        }
      }).then(function(dbResult) {
        res.json(dbResult);
    });


  });
};
