require('dotenv').config();
// require('dotenv').config({ silent: process.env.NODE_ENV === 'production' })  TODO
// if (process.env.NODE_ENV !== 'production') {
//     require('dotenv').load();
//   }

//////////////////////////
// dependencies
//////////////////////////
var express = require("express");
var bodyParser = require("body-parser");
var session = require('express-session');
var path = require('path');
var cookieParser = require('cookie-parser');
var passport = require('passport');

// models are required to sync them
var db = require("./models");

///////////////////////
// configure Express
///////////////////////
var app = express();

// sets the port info
app.set('port', (process.env.PORT || 8080));

// sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/assets/img')); 

/////////////////
// handlebars
/////////////////
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Auth Setup (Morgan)
/*
app.use(cookieParser());
app.use(session({
  secret: 'potato',
  saveUninitialized: false,
  resave: false

}));
*/

////////////////////////////////////////////////////////
// Import routes and give the server access to them.
////////////////////////////////////////////////////////
var routes = require("./controllers/app_controller.js");

app.use(routes);

////////////////////////////////////////////////////////////////////////////
// syncing our sequelize models and then start listening for requests
// use 'force: true' in sync call to override schema definition
////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////
// ***IMPORTANT***
// use this for DEV while schema is in flux
// set force=true to override schema
//////////////////////////////////////////////
db.sequelize
    .query('SET FOREIGN_KEY_CHECKS = 0', null, {raw: true})
    .then(function(results) {
        db.sequelize.sync({force: false})
        .then (function() {
            db.sequelize.query('SET FOREIGN_KEY_CHECKS = 1', null, {raw: true})
        })
        .then(function() {
            app.listen(app.get('port'), function() {
                console.log("App now listening at localhost: " + app.get('port'));
            });
    });
});

///////////////////////////////
// use this for QA and PROD
///////////////////////////////
// db.sequelize.sync({})
//     .then(function() {
//         app.listen(app.get('port'), function() {
//             console.log("App now listening at localhost: " + app.get('port'));
//         });  //.catch (function(error) { console.log(error); });
//     });


/////////////////////////////////////
// configure spotify authentication
/////////////////////////////////////
//OAuth: A token is a special code that is a temporary key that we
//get in our backend server which is connected to your spotify app.
//Spotify authenticates users using Spotify accounts and OAuth 2.0 tokens
//3 parties are involved in the authorization process:
    //Server: the Spotify server
    //Client: your application
    //Resource: the end user data and controls
//Verify callback takes client data and finds or creates a Spotify user
//Returns done the Spotify user info
//1. npm install passport-spotify

var SpotifyStrategy = require('passport-spotify').Strategy;

var SPOTIFY_ID = '5b419e7b9f424360a5b65b1f705ac363';
var SPOTIFY_SECRET = '634ab6b2f4e8410d9d7723325bff8c61';

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(
  new SpotifyStrategy(
    {
      clientID: SPOTIFY_ID,
      clientSecret: SPOTIFY_SECRET,
      callbackURL: 'http://localhost:8080/auth/spotify/callback'
    },
    function(accessToken, refreshToken, expires_in, profile, done) {
      User.findOrCreate({ spotifyId: profile.id }, function(err, user) {
        return done(err, user);
      });
    }
  )
);
