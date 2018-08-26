module.exports = function(sequelize, DataTypes) {

    var Song = sequelize.define("Songs", {
        song_id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        song_title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        artist_name: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        date_released: {
            type: DataTypes.STRING(8),
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        genre: {
            type: DataTypes.STRING(50),
            allowNull: false,
            defaultValue: 'Unknown',
            validate: {
                len: [1]
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
    });
  
    return Song;
  };
