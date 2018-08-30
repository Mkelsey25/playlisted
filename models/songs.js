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
    
    Playlist.bulkCreate([
        {playlist_name: "First Playlist", createdAt: default, updatedAt: default}, 
        {playlist_name: "Second Playlist", createdAt: default, updatedAt: default}
    ]).then(() => {
            return Playlist.findAll();
    }).then(playlists => {
        console.log(playlists);
    });
  
    return Song;
};
