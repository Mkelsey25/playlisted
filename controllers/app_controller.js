var express = require("express");
var router = express.Router();
var passport = require('passport');
var session = require('express-session');

// import the model to use its db function
var db = require("../models");

// =============================================================
// Routes
// =============================================================
require("../public/assets/routes/html-routes.js")(router);
require("../public/assets/routes/playlist-api-routes.js")(router);
require("../public/assets/routes/song-api-routes.js")(router);
require("../public/assets/routes/user-api-routes.js")(router);

//Morgan/////////////////////////////////////////////
var auth = require('../public/assets/routes/auth');

var loggedIn = function(req,res,next) {
if(req.isAuthenticated()) {
    next();
}
else {
    res.redirect('/login');
}
}

router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/login', function(req, res, next) {
    res.render('login');
});

router.get('/', function(req, res, next) {
    res.render('sign-up');
});
router.get('/profile', loggedIn, function(req, res, next) {
    res.send(req.session)
});
////////////////////////////////////////////////////////////////////////
module.exports = router;