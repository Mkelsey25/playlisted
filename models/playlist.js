'use strict'

var moment = require('moment');
const dateFormat = 'MM/DD/YYYY hh:mm A';

//Use the sequelize constructor to design a model for each new playlist and create SQL data 
module.exports = function(sequelize, DataTypes) {

    const Playlist = sequelize.define("Playlist", {
        playlist_id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        playlist_name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                len: { args: [1,50], msg: "String length is not in range" }
            }
        },
        user_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            defaultValue: 0
        },
        created_at: {
            type: DataTypes.DATE(3), 
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
            get: function() {
                return moment.utc(this.getDataValue('created_at')).local().format(dateFormat)
            }
        },
        updated_at: {
            type: DataTypes.DATE(3), 
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
            get: function() {
                return moment.utc(this.getDataValue('updated_at')).local().format(dateFormat)
            }
        }
    },
    {
        tableName: 'playlists',
        underscored: true,
        indexes: [ 
            { unique: true, fields: [ 'playlist_name', 'user_id'] } 
        ]
    });

    // relations
    Playlist.associate = function (models) {
        Playlist.belongsTo(models.Users, { constraints: true, onDelete: 'cascade', defaultValue: 0, foreignKey: 'user_id' });
        Playlist.hasMany(models.PlaylistSong, {foreignKey: 'playlist_id', sourceKey: 'playlist_id'});
    };

    return Playlist;
  };