'use strict';

var fs        = require('fs');
var path      = require('path');
const Sequelize = require('sequelize');
var basename  = path.basename(__filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.js')[env];
var db        = {};

//sequelize constructors
//TODO - comment this
if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

/*
//Spotify constructors

var spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};


function displaySpotify() {
  var spotify = new Spotify(config.spotify);
  spotify.search({type: 'track', query: arg2, limit: 3}, function(error, data) {
      if (error) {
          return console.log("Error while retrieving a user's song: " + error);
      } else {
          console.log("Here are some songs that matched your search: ");
          for (var i = 0; i <= 2; i++) {
              var songInfo = data.tracks.items[i];
              console.log("-----------------------------------------" +
                          "\nArtists: " + songInfo.artists[0].name + 
                          "\nSong: " + songInfo.name +
                          "\nPreview: " + songInfo.external_urls.spotify +
                          "\nAlbum: " + songInfo.album.name);
          }
          
      }
  });
}
*/

module.exports = db;
