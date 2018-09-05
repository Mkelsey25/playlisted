///////////////////////////////////////////////////////////////////////////////////////////////////
// File Name: html-routes.js 
//
// Description: This file offers a set of routes for sending users to the various html pages
///////////////////////////////////////////////////////////////////////////////////////////////////

// dependencies
var path = require("path");
var db = require("./../../../models");

// Routes
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads playlist.html
  app.get("/", function(req, res) {
    res.render("index", {
      title: "Playlisted"
    });

    /*  get render of songs to index page to work
        algorithm for choosing which songs to add to playlist
        variable to display songs */

    /*var query = {};
    db.Songs.findAll({
      where: query
    }).then(function(dbResult) {

      // send to handlebars
      var hbsObject = {
        songs: dbResult
      };
      res.render("index", hbsObject);
    });*/
  });

  // login route loads login.html
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../login.html"));
  });
  app.get("/sign-up", function(req, res) {
    res.sendFile(path.join(__dirname, "../sign-up.html"));
  });

};
