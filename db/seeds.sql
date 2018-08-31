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
INSERT INTO `playlisted_db`.`songs` (`song_title`, `artist_name`, `date_released`,`mood`, `energy`, `genre`, `createdAt`, `updatedAt`) 
VALUES ("Come Sail Away", "Styx",  "02/02/02", "Ecstatic", "0.9", "Rock", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Waves of Galveston", "Iron and Wine", "01/01/01", "Sad", "0.2", "Easy Listening", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("London Hymn", "Josh Groban", "10/10/10", "Meh", "0.3", "Classical", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Ave Maria", "Josh Groban", "10/10/10", "Meh", "0.3", "Classical", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Everybody's Changing", "Keane", "11/11/11", "Angry", "0.7", "Easy Listening", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3));


select * from songs;