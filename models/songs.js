'use strict'

var moment = require('moment');
const dateFormat = 'MM/DD/YYYY hh:mm A';

//Use the sequelize constructor to design a model for each Song and create SQL data 
module.exports = function(sequelize, DataTypes) {

    const Song = sequelize.define("Songs", {
        song_id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        song_title: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate: {
                len: { args: [1,100], msg: "String length is not in range" }
            }
        },
        artist_name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                len: { args: [1,50], msg: "String length is not in range" }
            }
        },
        date_released: {
            type: DataTypes.DATEONLY,
            allowNull: true,
            validate: { isDate: true },
            get: function() {
                return moment.utc(this.getDataValue('date_released')).format('YYYY-MM-DD')
            }
        },
        mood: {
            type: DataTypes.ENUM,
            values: ['Angry', 'Sad', 'Meh', 'Happy', 'Ecstatic', 'Unknown'],
            allowNull: false,
            defaultValue: 'Unknown',
            validate: {
                isIn: {
                    args: [['Angry', 'Sad', 'Meh', 'Happy', 'Ecstatic', 'Unknown']],
                    msg: "Must be a mood within the defined list."
                  }
            }
        },
        energy: {
            type: DataTypes.ENUM,
            values: ['0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1.0'],
            allowNull: false,
            validate: {
                isIn: {
                    args: [['0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1.0']],
                    msg: "Must be an energy value between 0.1 and 1.0."
                  }
            }
        },
        genre: {
            type: DataTypes.ENUM,
            values: ['Rock', 'Classical', 'Easy Listening', 'Pop', 'Rap/Hip-Hop', 'Unknown'],
            allowNull: false,
            defaultValue: 'Unknown',
            validate: {
                isIn: {
                    args: [['Rock', 'Classical', 'Easy Listening', 'Pop', 'Rap/Hip-Hop', 'Unknown']],
                    msg: "Must be a genre within the defined list."
                  }
            }  
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
        tableName: 'songs',
        underscored: true,
        indexes: [ 
            { unique: true, fields: [ 'song_title', 'artist_name'] } 
        ]
    });
  
    Song.associate = function(models) {
        Song.hasMany(models.PlaylistSong, {foreignKey: 'song_id'});
    };

    return Song;
};
