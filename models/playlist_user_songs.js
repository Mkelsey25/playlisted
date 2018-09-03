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
            type: DataTypes.BIGINT,
            references: {
                model: 'Playlist',
                key: 'playlist_id'
              }
        },
        user_id: {
            type: DataTypes.BIGINT,
            references: {
                model: 'User',
                key: 'user_id'
            }
        },
        song_id: {
            type: DataTypes.BIGINT,
            references: {
                model: 'Song',
                key: 'song_id'
            }
        },
        createdAt: {
            type: DataTypes.DATE(3), 
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
            get: function() {
                return moment.utc(this.getDataValue('createdAt')).local().format(dateFormat)
            }
        },
        updatedAt: {
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
        indexes: [ 
            { unique: true, fields: [ 'playlist_id', 'user_id', 'song_id'] } 
        ]
    });
  
    return PlaylistSong;
  };

  //TODO Test
//   Users.hasMany(Playlist_user_songs, { onDelete: 'SET NULL', onUpdate: 'CASCADE'});
//   Songs.hasMany(Playlist_user_songs, { onDelete: 'SET NULL', onUpdate: 'CASCADE'});
