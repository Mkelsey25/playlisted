var express = require("express");
var router = express.Router();

// import the model to use its db function
var db = require("../models");

// =============================================================
// Routes
// =============================================================
require("../public/assets/routes/html-routes.js")(router);
require("../public/assets/routes/playlist-api-routes.js")(router);
require("../public/assets/routes/song-api-routes.js")(router);
require("../public/assets/routes/user-api-routes.js")(router);
  
module.exports = router;