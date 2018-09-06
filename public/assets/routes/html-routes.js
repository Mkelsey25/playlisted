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
  });

  // login route loads login.html

  // app.get("/login", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../login.html"));
  // });
  
  // app.get("/sign-up", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../sign-up.html"));
  // });

  // commented this out as theres routes are in handlebars and under a different file.... may need to add the title piece to that though.  will check
//   app.get("/login", function(req, res) {
//     res.render("login", {
//       title: "Login"
//     });
//   });
//   app.get("/sign-up", function(req, res) {
//     res.render("sign-up", {
//       title: "Sign Up"
//     });
//   });

};
