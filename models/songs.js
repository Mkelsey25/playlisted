//Use the sequelize constructor to design a model for each Song and create SQL data 
module.exports = function(sequelize, DataTypes) {

    var Song = sequelize.define("Songs", {
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
            type: DataTypes.STRING(8),
            allowNull: true,
            validate: {
                len: { args: [1,8], msg: "String length is not in range" }
            }
        },
        mood: {
            type: DataTypes.ENUM,
            values: ['Angry', 'Sad', 'Meh', 'Happy', 'Ecstatic', 'Unknown'],
            allowNull: false,
            defaultValue: 'Unknown',
            validate: {
                len: [1]
            }
        },
        energy: {
            type: DataTypes.ENUM,
            values: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
            allowNull: false,
            defaultValue: 'Unknown',
            validate: {
                len: [1]
            }
        },
        genre: {
            type: DataTypes.ENUM,
            values: ['Rock', 'Classical', 'Easy Listening', 'Pop', 'Rap/Hip-Hop', 'Unknown'],
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
    }, 
    { 
        tableName: 'Songs' 
    });
  
    return Song;
};
