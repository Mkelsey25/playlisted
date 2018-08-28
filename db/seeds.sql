---------------------------
-- Test data population
---------------------------
-- insert users
INSERT INTO `playlisted_db`.`users` (`user_id`, `user_name`, `user_password`, `createdAt`, `updatedAt`) VALUES (default, 'Jenni', 'pwd', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3));
INSERT INTO `playlisted_db`.`users` (`user_id`, `user_name`, `user_password`, `createdAt`, `updatedAt`) VALUES (default, 'Becky', 'pwd', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3));
INSERT INTO `playlisted_db`.`users` (`user_id`, `user_name`, `user_password`, `createdAt`, `updatedAt`) VALUES (default, 'Morgan', 'pwd', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3));
INSERT INTO `playlisted_db`.`users` (`user_id`, `user_name`, `user_password`, `createdAt`, `updatedAt`) VALUES (default, 'James', 'pwd', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3));
INSERT INTO `playlisted_db`.`users` (`user_id`, `user_name`, `user_password`, `createdAt`, `updatedAt`) VALUES (default, 'SuperUser', 'pwd', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3));

select * from users;

-- insert songs
INSERT INTO `playlisted_db`.`songs` (`song_id`, `song_title`, `artist_name`, `date_released`, `genre`, `createdAt`, `updatedAt`) VALUES (default, 'SongTitle1', 'ArtistName1', '20180101', default, CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3));
INSERT INTO `playlisted_db`.`songs` (`song_id`, `song_title`, `artist_name`, `date_released`, `genre`, `createdAt`, `updatedAt`) VALUES (default, 'SongTitle2', 'ArtistName2', '20180201', default, CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3));
INSERT INTO `playlisted_db`.`songs` (`song_id`, `song_title`, `artist_name`, `date_released`, `genre`, `createdAt`, `updatedAt`) VALUES (default, 'SongTitle3', 'ArtistName3', '20180301', default, CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3));
INSERT INTO `playlisted_db`.`songs` (`song_id`, `song_title`, `artist_name`, `date_released`, `genre`, `createdAt`, `updatedAt`) VALUES (default, 'SongTitle4', 'ArtistName4', '20180401', default, CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3));
INSERT INTO `playlisted_db`.`songs` (`song_id`, `song_title`, `artist_name`, `date_released`, `genre`, `createdAt`, `updatedAt`) VALUES (default, 'SongTitle5', 'ArtistName5', '20180501', default, CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3));
INSERT INTO `playlisted_db`.`songs` (`song_id`, `song_title`, `artist_name`, `date_released`, `genre`, `createdAt`, `updatedAt`) VALUES (default, 'SongTitle6', 'ArtistName6', '20180601', default, CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3));
INSERT INTO `playlisted_db`.`songs` (`song_id`, `song_title`, `artist_name`, `date_released`, `genre`, `createdAt`, `updatedAt`) VALUES (default, 'SongTitle7', 'ArtistName7', '20180701', default, CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3));
INSERT INTO `playlisted_db`.`songs` (`song_id`, `song_title`, `artist_name`, `date_released`, `genre`, `createdAt`, `updatedAt`) VALUES (default, 'SongTitle8', 'ArtistName8', '20180801', default, CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3));
INSERT INTO `playlisted_db`.`songs` (`song_id`, `song_title`, `artist_name`, `date_released`, `genre`, `createdAt`, `updatedAt`) VALUES (default, 'SongTitle9', 'ArtistName9', '20180901', default, CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3));
INSERT INTO `playlisted_db`.`songs` (`song_id`, `song_title`, `artist_name`, `date_released`, `genre`, `createdAt`, `updatedAt`) VALUES (default, 'SongTitle10', 'ArtistName10', '20181001', default, CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3));

select * from songs