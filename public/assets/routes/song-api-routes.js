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

  /////////////////////////////////////////////
  // GET route for getting all of the songs
  /////////////////////////////////////////////
  app.get("/api/songs", function(req, res) {
    var query = {};

    console.log("route: all songs");
    console.log(JSON.stringify(req.body));

    //find all songs
    db.Songs.findAll({
      where: query
    }).then(function(dbResult) {
      // res.json(dbResult);

      // send to handlebars
      var hbsObject = {
        songs: dbResult
      };
      res.render("songs", hbsObject);
    });
  });

  /////////////////////////////////////////////
  // GET route for retrieving a single song
  /////////////////////////////////////////////
  app.get("/api/songs/:id", function(req, res) {

    console.log("route: specific song");
    console.log(JSON.stringify(req.body));

    // if (req.query.song_id) {
    //   query.song_id = req.query.song_id;
    // };

    db.Songs.findAll({
      where: {
        song_id: req.params.id
      }
    }).then(function(dbResult) {
      // res.json(dbResult);

      // send to handlebars
      var hbsSong = {
        song: dbResult
      };
      // console.log(dbResult);
      res.render("songs", hbsSong);
    });
  });

  /////////////////////////////////////////////
  // POST route for saving new song
  /////////////////////////////////////////////
  app.post("/api/songs", function(req, res) {

    console.log("route: create song");
    console.log(JSON.stringify(req.body));

    db.Songs.create(req.body).then(function(dbResult) {
      console.log("Song created.");

      res.json(dbResult);
    });
  });

  /////////////////////////////////////////////
  // DELETE route for deleting a song
  /////////////////////////////////////////////
  app.delete("/api/songs/:id", function(req, res) {

    console.log("route: delete a song");
    console.log(JSON.stringify(req.body));

    db.Songs.destroy({
      where: {
        song_id: req.params.id
      }
    }).then(function(dbResult) {
      console.log("after the deletion of song");

      res.json(dbResult);
    });
  });

  /////////////////////////////////////////////
  // PUT route for updating
  /////////////////////////////////////////////
  app.put("/api/songs/:id", function(req, res) {

    console.log("route: update song");
    console.log(JSON.stringify(req.body));
    console.log("request query: " + req.query.songs_id);
    console.log("request params: " + req.params.id);

    var id = (req.params.id) ? req.params.id : req.body.id;

    db.Songs.update(
      req.body,
      {
        where: {
          song_id: id
        }
      }).then(function(dbResult) {
        res.json(dbResult);
    });
  });
};
