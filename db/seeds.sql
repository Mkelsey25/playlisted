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
       ("Everybody's Changing", "", "11/11/11", "Angry", "0.7", "Indie", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Yam Yam", "No Vacation", "01/01/2017", "Happy", "0.7", "Indie", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Deep Sea Dive", "Snail Mail", "06/08/2018", "Sad", "0.4", "Indie", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Space Song", "Beach House", "01/01/2015", "Meh", "0.5", "Indie", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Flaming Hot Cheetos", "Clairo", "01/01/2018", "Happy", "0.6", "Indie", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("When the Night is Over", "Lord Heron", "04/01/2018", "Meh", "0.5", "Indie", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Marry Me, Archie", "Alvvays", "01/01/2014", "Happy", "0.7", "Indie", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Mistake", "Middle Kids", "01/01/2018", "Angry", "0.8", "Indie", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Edge of Town", "Middle Kids", "01/01/2018", "Meh", "0.6", "Indie", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Smother", "Daughter", "01/01/2013", "Sad", "0.3", "Indie", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Weak", "WET", "01/01/2016", "Sad", "0.3", "Indie", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Don't Wanna be Your Girl", "WET", "01/01/2016", "Sad", "0.3", "Indie", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("One of These Days", "Bedouine", "Easy Listening", "Happy", "0.2", "Indie", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),

       ;


select * from songs;