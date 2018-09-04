'use strict'

var moment = require('moment');
const dateFormat = 'MM/DD/YYYY hh:mm A';

//Use the sequelize constructor to design a model for each new playlist and create SQL data 
module.exports = function(sequelize, DataTypes) {

    var PlaylistSong = sequelize.define("PlaylistSong", {
        playlist_user_songs_id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        playlist_id: {
            type: DataTypes.BIGINT
        },
        user_id: {
            type: DataTypes.BIGINT
        },
        song_id: {
            type: DataTypes.BIGINT
        },
        created_at: {
            type: DataTypes.DATE(3), 
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
            get: function() {
                return moment.utc(this.getDataValue('createdAt')).local().format(dateFormat)
            }
        },
        updated_at: {
            type: DataTypes.DATE(3), 
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
            get: function() {
                return moment.utc(this.getDataValue('updatedAt')).local().format(dateFormat)
            }
        }
    },
    {
        tableName: 'playlist_user_songs',
        underscored: true,
        indexes: [ 
            { unique: true, fields: [ 'playlist_id', 'user_id', 'song_id'] } 
        ]
    });
  
    // relations
    PlaylistSong.associate = function (models) {
        PlaylistSong.belongsTo(models.Users, { constraints: true, onDelete: 'cascade', defaultValue: 0, foreignKey: 'user_id' });
        PlaylistSong.belongsTo(models.Songs, { constraints: true, onDelete: 'cascade', defaultValue: 0, foreignKey: 'song_id' });
        PlaylistSong.belongsTo(models.Playlist, { constraints: true, onDelete: 'cascade', defaultValue: 0, foreignKey: 'playlist_id' });
    };

    return PlaylistSong;
  };
