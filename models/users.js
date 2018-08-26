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
  
    return User;
  };
