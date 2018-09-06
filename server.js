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
// var fs = require('fs');
// var https = require('https');

///////////////////////
//Passport Config
///////////////////////
// require('./config/passport')(passport);
// var LocalStrategy = require('passport-local').Strategy;


var request = require('request');
var querystring = require('querystring');
// models are required to sync them
var db = require("./models");
var expressValidator = require('express-validator');

///////////////////////
// configure Express
///////////////////////
var app = express();
app.use(express.json());

// sets the port info
app.set('port', (process.env.PORT || 8080));

// body parsing middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// serve static folders
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/assets/img')); 

/////////////////
// handlebars
/////////////////
var exphbs = require("express-handlebars");

app.set('views', path.join(__dirname, 'views'));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Expess Session
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

/////////////////////
// Passport init
/////////////////////
// app.use(passport.initialize());
// app.use(passport.session());
//NOT SURE IF THIS IS REALLY NEEDED BUT HERE IT IS ANYWAY
//const SERVER_SECRET = 'potato';

//require('./app/routes.js')(app, passport, SERVER_SECRET);

/*
/////////////////////////////////////
// configure spotify authentication
/////////////////////////////////////

var SpotifyStrategy = require('passport-spotify').Strategy;

passport.use(
  new SpotifyStrategy(
    {
      clientID: client_id,
      clientSecret: client_secret,
      callbackURL: 'http://localhost:8888/auth/spotify/callback'
    },
    function(accessToken, refreshToken, expires_in, profile, done) {
      User.findOrCreate({ spotifyId: profile.id }, function(err, user) {
        return done(err, user);
      });
    }
  )
);
*/ 

///////////////////////////
// Express validator
///////////////////////////
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

// connect flash (for messages stored in session)
app.use(flash());

// Global Vars
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});

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
