var express = require("express");
var router = express.Router();
var passport = require('passport');

// import the model to use its db function
var db = require("../models");

// =============================================================
// Routes
// =============================================================
require("../public/assets/routes/html-routes.js")(router);
require("../public/assets/routes/playlist-api-routes.js")(router);
require("../public/assets/routes/song-api-routes.js")(router);
require("../public/assets/routes/user-api-routes.js")(router);
require("../public/assets/routes/auth")(passport, router);

router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/login', function(req, res, next) {
    res.render('login');
});

router.get('/', function(req, res, next) {
    res.render('sign-up');
});
  
module.exports = router;