
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
var flash    = require('connect-flash');
var fs = require('fs');
var https = require('https');
//Passport Config
//require('./config/passport')(passport);

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

app.use(cookieParser());
app.use(session({
  secret: 'potato',
  saveUninitialized: true,
  resave: true

}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash()); // use connect-flash for flash messages stored in session

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

//////////////////////////////////////////////
// ***IMPORTANT***
// use this for DEV while schema is in flux
// set force=true to override schema
//////////////////////////////////////////////
db.sequelize
    .query('SET FOREIGN_KEY_CHECKS = 0', null, {raw: true})
    .then(function(results) {
        db.sequelize.sync({force: true})
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




/////////////////////////////////Morgan Server Set up
/*var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session  = require('express-session');
var morgan = require('morgan');
var app = express();
var port     = process.env.PORT || 5555;
var passport = require('passport');
var flash    = require('connect-flash');
var fs = require('fs');
var https = require('https');

// config passport and connect to DB
require('./config/passport')(passport);

// set up express
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// config passport
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
 } )); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session



const SERVER_SECRET = 'secret';

// routes
require('./app/routes.js')(app, passport, SERVER_SECRET); // load our routes and pass in our app and fully configured passport

// Create server
http.createServer(options, app).listen(port, function(){
	console.log('Server listening on port ' + port);
});*/