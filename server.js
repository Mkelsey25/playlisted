/////////////////////////////////////////////////////////
// use dotenv except in prod (where it is not needed)
/////////////////////////////////////////////////////////
require('dotenv').config({ silent: process.env.NODE_ENV === 'production' })  
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}

//////////////////////////
// dependencies
//////////////////////////
var express = require("express");
var bodyParser = require("body-parser");
var session = require('express-session');
var path = require('path');

var passport = require('passport');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var flash = require('connect-flash');
var fs = require('fs');
var https = require('https');
//Passport Config
//require('./config/passport')(passport);

var request = require('request');
var querystring = require('querystring');
// models are required to sync them
var db = require("./models");
// var validate = require('express-validation');

///////////////////////
// configure Express
///////////////////////
var app = express();
app.use(express.json());

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
/////////////////////////
app.use(cookieParser());

app.use(session({
  secret: 'potato',
  saveUninitialized: true,
  resave: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash()); // use connect-flash for flash messages stored in session*/

//NOT SURE IF THIS IS REALLY NEEDED BUT HERE IT IS ANYWAY
//const SERVER_SECRET = 'potato';

//require('./app/routes.js')(app, passport, SERVER_SECRET);

////////////////////////////////////////////////////////
// Import routes and give the server access to them.
////////////////////////////////////////////////////////
var routes = require("./controllers/app_controller.js");

app.use(routes);

////////////////////////////////////////////////////////////////////////////
// syncing our sequelize models and then start listening for requests
// use 'force: true' in sync call to override schema definition
////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////
// ***IMPORTANT***  use this for DEV while schema is in flux 
// set force=true to override schema
/////////////////////////////////////////////////////////////////
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



//using passport-spotify
/*
var SpotifyStrategy = require('passport-spotify').Strategy;

var SPOTIFY_ID;
var SPOTIFY_SECRET;

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
*/ 