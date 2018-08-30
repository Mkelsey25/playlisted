//Use the sequelize constructor to design a model for each User and create SQL data 
var bcrypt = require('bcrypt-nodejs');
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
            validate: {
                //user_name length must be within 1-50 characters
                len: { args: [1,50], msg: "String length is not in range" }
            }
        },
        user_password: {
            type: DataTypes.STRING(50),
            allowNull: true,
            validate: {
                len: { args: [1,50], msg: "String length is not in range" }
            }
        },
        createdAt: {
            type: DataTypes.DATE(3), 
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)')
        },
        updatedAt: {
            type: DataTypes.DATE(3), 
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)')
        }
    }, 
    {
        tableName: 'Users'
    });
    User.methods.hashPassword = function(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
    }
    User.methods.comparePassword = function(password) {
        return bcrypt.compareSync(password, hash)
    }
  
    return User;
  };
