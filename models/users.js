'use strict'

var moment = require('moment');
const dateFormat = 'MM/DD/YYYY hh:mm A';

//Use the sequelize constructor to design a model for each User and create SQL data 
module.exports = function(sequelize, DataTypes) {

    var User = sequelize.define("Users", {
        user_id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        user_name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
            validate: {
                //user_name length must be within 1-50 characters
                len: { args: [1,50], msg: "String length is not in range" }
            }
        },
        user_email: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
            validate: {
                len: {
                    args: [6, 128],
                    msg: "Email address must be between 6 and 128 characters in length"
                },
                isEmail: {
                    msg: "Email address must be valid"
                }
            }
        },
        user_password: {
            type: DataTypes.STRING(50),
            allowNull: true,
            validate: {
                len: { args: [1,50], msg: "String length is not in range" }
            }
        },
        role: {
            type: DataTypes.ENUM,
            values: ['user', 'admin', 'disabled'],
            allowNull: false,
            defaultValue: 'user'
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
        tableName: 'Users',
        underscored: true
    });
  
    User.associate = function(models) {
        User.hasMany(models.Playlist, {foreignKey: 'user_id', sourceKey: 'user_id'});
    };

    return User;
  };