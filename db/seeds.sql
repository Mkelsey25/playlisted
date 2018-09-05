---------------------------
-- Test data population
---------------------------
-- insert users
<<<<<<< HEAD
INSERT INTO `playlisted_db`.`users` (`user_id`, `user_name`,`user_email`, `user_password`, `created_at`, `updated_at`) VALUES (default, 'Jenni','jenni@aol.com', 'pwd', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3));
INSERT INTO `playlisted_db`.`users` (`user_id`, `user_name`,`user_email`, `user_password`, `created_at`, `updated_at`) VALUES (default, 'Becky','becky@aol.com', 'pwd', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3));
INSERT INTO `playlisted_db`.`users` (`user_id`, `user_name`,`user_email`, `user_password`, `created_at`, `updated_at`) VALUES (default, 'Morgan','morgan@aol.com', 'pwd', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3));
INSERT INTO `playlisted_db`.`users` (`user_id`, `user_name`,`user_email`, `user_password`, `created_at`, `updated_at`) VALUES (default, 'James','james@aol.com', 'pwd', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3));
INSERT INTO `playlisted_db`.`users` (`user_id`, `user_name`,`user_email`, `user_password`, `created_at`, `updated_at`) VALUES (default, 'SuperUser','superuser@aol.com', 'pwd', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3));
=======
INSERT INTO `playlisted_db`.`users` (`user_id`, `user_name`, `user_password`, `created_at`, `updated_at`) VALUES (default, 'Jenni', 'pwd', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3));
INSERT INTO `playlisted_db`.`users` (`user_id`, `user_name`, `user_password`, `created_at`, `updated_at`) VALUES (default, 'Becky', 'pwd', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3));
INSERT INTO `playlisted_db`.`users` (`user_id`, `user_name`, `user_password`, `created_at`, `updated_at`) VALUES (default, 'Morgan', 'pwd', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3));
INSERT INTO `playlisted_db`.`users` (`user_id`, `user_name`, `user_password`, `created_at`, `updated_at`) VALUES (default, 'James', 'pwd', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3));
INSERT INTO `playlisted_db`.`users` (`user_id`, `user_name`, `user_password`, `created_at`, `updated_at`) VALUES (default, 'SuperUser', 'pwd', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3));
>>>>>>> a04ccf8edd216e4e76ea0e72ca252274066d9daa

select * from users;

-- insert songs
INSERT INTO `playlisted_db`.`songs` (`song_title`, `artist_name`, `date_released`,`mood`, `energy`, `genre`, `created_at`, `updated_at`) 
VALUES ("Come Sail Away", "Styx",  "02/02/02", "Ecstatic", "0.9", "Rock", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Waves of Galveston", "Iron and Wine", "01/01/01", "Sad", "0.2", "Easy Listening", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("London Hymn", "Josh Groban", "02/02/02", "Meh", "0.3", "Classical", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Ave Maria", "Josh Groban", "02/02/02", "Meh", "0.3", "Classical", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Everybody's Changing", "Keane", "02/02/02", "Angry", "0.7", "Easy Listening", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Yam Yam", "No Vacation", "02/02/02", "Happy", "0.7", "Easy Listening", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Deep Sea Dive", "Snail Mail", "02/02/02", "Sad", "0.4", "Easy Listening", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Space Song", "Beach House", "02/02/02", "Meh", "0.5", "Easy Listening", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Flaming Hot Cheetos", "Clairo", "02/02/02", "Happy", "0.6", "Easy Listening", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("When the Night is Over", "Lord Heron", "04/01/18", "Meh", "0.5", "Easy Listening", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
<<<<<<< HEAD
       ("Marry Me, Archie", "Alvvays", "02/02/02", "Happy", "0.7", "Easy Listening", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Mistake", "Middle Kids", "02/02/02", "Angry", "0.8", "Easy Listening", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Edge of Town", "Middle Kids", "02/02/02", "Meh", "0.6", "Easy Listening", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Smother", "Daughter", "02/02/02", "Sad", "0.3", "Easy Listening", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Weak", "WET", "02/02/02", "Sad", "0.3", "Easy Listening", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Don't Wanna be Your Girl", "WET", "02/02/02", "Sad", "0.3", "Easy Listening", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("One of These Days", "Bedouine", "02/02/02", "Happy", "0.2","Easy Listening", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Chinatown", "Girlpool", "02/02/02", "Meh", "0.4", "Easy Listening", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Cut Your Bangs", "Girlpool", "02/02/02", "Sad", "0.3", "Easy Listening", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Depreston", "Courtney Barnett", "02/02/02", "Happy", "0.3", "Easy Listening", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Cool", "Soccer Mommy", "02/02/02", "Happy", "0.5", "Easy Listening", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Shark Smile", "Big Thief", "02/02/02", "Happy", "0.6", "Easy Listening", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Paul", "Big Thief", "02/02/02", "Sad", "0.2", "Easy Listening", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Believer", "Imagine Dragons", "02/02/02", "Happy", "0.5", "Rock", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Celebrity Skin", "Hole", "02/02/02", "Meh", "0.5", "Rock", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("First to Love", "Blaqk Audio", "02/02/02", "Happy", "0.5", "Rock", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("The Gutter", "Coheed and Cambria", "02/02/02", "Sad", "0.8", "Rock", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Photograph", "Nickelback", "02/02/02", "Sad", "0.6", "Rock", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("How You Remind Me", "Nickleback", "02/02/02", "Meh", "0.5", "Rock", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Rockstar", "Nickleback", "02/02/02", "Angry", "0.8", "Rock", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Hurt Yourself", "Beyonce", "02/02/02", "Angry", "1.0", "Rock", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Aurelia", "AFI", "02/02/02", "Angry", "0.7", "Rock", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Livin' On A Prayer", "Bon Jovi", "02/02/02", "Ecstatic", "0.7", "Rock", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Smells Like Teen Spirit", "Nirvana", "02/02/02", "Angry", "0.8", "Rock", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Young Volcanoes", "Fall Out Boy", "02/02/02", "Happy", "0.7", "Rock", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Save Rock and Roll", "Fall Out Boy", "02/02/02", "Meh", "0.6", "Rock", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Just One Yesterday", "Fall Out Boy", "02/02/02", "Happy", "0.6", "Rock", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("My Songs Know What You Did In The Dark", "Fall Out Boy", "02/02/02", "Angry", "0.9", "Rock", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Sugar, We're Going Down", "Fall Out Boy", "02/02/02", "Happy", "0.8", "Rock", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Bohemian Rhapsody", "Queen", "02/02/02", "Happy", "0.7", "Rock", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("We Will Rock You", "Queen", "02/02/02", "Ecstatic", "0.9", "Rock", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Go Your Own Way", "Fleetwood Mac", "02/02/02", "Happy", "0.6", "Rock", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Bad Romance", "Lady Gaga", "02/02/02", "Meh", "0.7", "Pop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Love Game", "Lady Gaga", "02/02/02", "Happy", "0.8", "Pop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Poker Face", "Lady Gaga", "02/02/02", "Happy", "0.7", "Pop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("We Can't Stop", "Miley Cyrus", "02/02/02", "Ecstatic", "0.7", "Pop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Party In The USA", "Miley Cyrus", "02/02/02", "Happy", "0.6", "Pop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("TGIF", "Katy Perry", "02/02/02", "Ecstatic", "1.0", "Pop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Fireworks", "Katy Perry", "02/02/02", "Ecstatic", "0.7", "Pop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("One Last Time", "Ariana Grande", "02/02/02", "Happy", "0.5", "Pop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Dangerous Woman", "Ariana Grande", "02/02/02", "Meh", "0.4", "Pop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Look What You Made Me Do", "Taylor Swift", "02/02/02", "Angry", "0.6", "Pop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Shake It Off", "Taylor Swift", "02/02/02", "Ecstatic", "0.8", "Pop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Hit Me Baby, One More Time", "Britney Spears", "02/02/02", "Sad", "0.7", "Pop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Piece of Me", "Britney Spears", "02/02/02", "Happy", "0.7", "Pop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Toxic", "Britney Spears", "02/02/02", "Happy", "0.7", "Pop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Hands To Myself", "Selena Gomez", "02/02/02", "Meh", "0.5", "Pop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Fetish", "Selena Gomez", "02/02/02", "Meh", "0.4", "Pop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Breakaway", "Kelly Clarkson", "02/02/02", "Sad", "0.2", "Pop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Girls Like You", "Maroon 5", "02/02/02", "Ecstatic", "0.7", "Pop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Sugar", "Maroon 5", "02/02/02", "Happy", "0.6", "Pop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("One Kiss", "Dua Lipa", "02/02/02", "Ecstatic", "0.8", "Pop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("In My Feelings", "Drake", "02/02/02", "Happy", "0.7", "rap/hip-hop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Nice For What", "Drake", "02/02/02", "Happy", "0.6", "rap/hip-hop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Fade", "Kanye West", "02/02/02", "Meh", "0.7", "rap/hip-hop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Father Outstretch Your Hands Pt. 2", "Kanye West", "02/02/02", "Ecstatic", "0.9", "rap/hip-hop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Six Foot Seven Foot", "Lil Wayne", "02/02/02", "Happy", "0.8", "rap/hip-hop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("I Mean It", "G-Eazy", "02/02/02", "Meh", "0.4", "rap/hip-hop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Self-Care", "Mac Miller", "02/02/02", "Meh", "0.3", "rap/hip-hop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Bodak Yellow", "Cardi B", "02/02/02", "Ecstatic", "1.0", "rap/hip-hop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Be Careful", "Cardi B", "02/02/02", "Sad", "0.5", "rap/hip-hop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Bartier Cardi", "Cardi B", "02/02/02", "Ecstatic", "0.9", "rap/hip-hop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Chun-Li", "Nicki Minaj", "02/02/02", "Happy", "0.8", "rap/hip-hop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Moment For Life", "Nicki Minaj", "02/02/02", "Happy", "0.5", "rap/hip-hop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Anaconda", "Nicki Minaj", "02/02/02", "Ecstatic", "1.0", "rap/hip-hop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Love On Top", "Beyonce", "02/02/02", "Happy", "0.6", "rap/hip-hop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Crazy In Love", "Beyonce", "02/02/02", "Ecstatic", "0.8", "rap/hip-hop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("DNA", "Kendrick Lamar", "02/02/02", "Angry", "0.9", "rap/hip-hop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Humble", "Kendrick Lamar", "02/02/02", "Angry", "0.8", "rap/hip-hop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Rude Boy", "Rihanna", "02/02/02", "Happy", "0.8", "rap/hip-hop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Love On The Brain", "Rihanna", "02/02/02", "Sad", "0.4", "rap/hip-hop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Sisters", "Future", "02/02/02", "Meh", "0.5", "rap/hip-hop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Sleep", "Eric Whitacre", "02/02/02", "Meh", "0.5", "Classical", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Lux Aurumque", "Eric Whitacre", "02/02/02", "Meh", "0.3", "Classical", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("when david heard", "Eric Whitacre", "02/02/02", "Sad", "0.2", "Classical", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Come What May", "Nicole Kidman and Ewan McGregor", "02/02/02", "Ecstatic", "0.9", "Classical", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Beethoven's 5th Symphony", "Ludwig Van Beethoven", "02/02/02", "Happy", "0.7", "Classical", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Hallelujah", "Lindsey Stirling", "02/02/02", "Meh", "0.2", "Classical", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("The Show Must Go On", "Celine Dion, Lindsey Stirling ", "02/02/02", "Sad", "0.8", "Classical", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("A Thousand Years", "The Piano Guys", "02/02/02", "Happy", "0.5", "Classical", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("The Hobbit Cover", "The Piano Guys", "02/02/02", "Sad", "0.2", "Classical", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Fight Song", "The Piano Guys", "02/02/02", "Happy", "0.9", "Classical", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Bella's Lullaby", "Carter Burwell", "02/02/02", "Sad", "0.1", "Classical", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Pokemon Theme", "Kurt Hugo Schneider, Lindsey Stirling", "02/02/02", "Ecstatic", "1.0", "Classical", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Hallelujah", "Il Divo", "02/02/02", "Sad", "0.6", "Classical", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Mama", "Il Divo", "02/02/02", "Sad", "0.3", "Classical", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Regresa a Mi", "Il Divo", "02/02/02", "Sad", "0.7", "Classical", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("The Seal Lullaby ", "Eric Whitacre", "02/02/02", "Happy", "0.1", "Classical", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3))
=======
       ("Marry Me, Archie", "Alvvays", "01/01/14", "Happy", "0.7", "Easy Listening", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Mistake", "Middle Kids", "01/01/18", "Angry", "0.8", "Easy Listening", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Edge of Town", "Middle Kids", "01/01/18", "Meh", "0.6", "Easy Listening", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Smother", "Daughter", "01/01/13", "Sad", "0.3", "Easy Listening", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Weak", "WET", "01/01/16", "Sad", "0.3", "Easy Listening", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Don't Wanna be Your Girl", "WET", "01/01/16", "Sad", "0.3", "Easy Listening", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("One of These Days", "Bedouine", "01/01/18", "Happy", "0.2","Easy Listening", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Chinatown", "Girlpool", "01/01/15", "Meh", "0.4", "Easy Listening", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Cut Your Bangs", "Girlpool", "01/01/15", "Sad", "0.3", "Easy Listening", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Depreston", "Courtney Barnett", "01/01/15", "Happy", "0.3", "Easy Listening", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Cool", "Soccer Mommy", "03/01/18", "Happy", "0.5", "Easy Listening", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Shark Smile", "Big Thief", "06/09/17", "Happy", "0.6", "Easy Listening", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Paul", "Big Thief", "01/01/16", "Sad", "0.2", "Easy Listening", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Believer", "Imagine Dragons", "01/01/17", "Happy", "0.5", "Rock", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Celebrity Skin", "Hole", "01/01/09", "Meh", "0.5", "Rock", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("First to Love", "Blaqk Audio", "07/08/16", "Happy", "0.5", "Rock", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("The Gutter", "Coheed and Cambria", "08/16/18", "Sad", "0.8", "Rock", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Photograph", "Nickelback", "01/01/05", "Sad", "0.6", "Rock", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("How You Remind Me", "Nickleback", "01/01/01", "Meh", "0.5", "Rock", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Rockstar", "Nickleback", "01/01/05", "Angry", "0.8", "Rock", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Hurt Yourself", "Beyonce", "01/01/16", "Angry", "1.0", "Rock", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Aurelia", "AFI", "01/01/17", "Angry", "0.7", "Rock", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Livin' On A Prayer", "Bon Jovi", "01/01/86", "Ecstatic", "0.7", "Rock", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Smells Like Teen Spirit", "Nirvana", "01/01/91", "Angry", "0.8", "Rock", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Young Volcanoes", "Fall Out Boy", "01/01/13", "Happy", "0.7", "Rock", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Save Rock and Roll", "Fall Out Boy", "01/01/13", "Meh", "0.6", "Rock", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Just One Yesterday", "Fall Out Boy", "01/01/13", "Happy", "0.6", "Rock", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("My Songs Know What You Did In The Dark", "Fall Out Boy", "01/01/13", "Angry", "0.9", "Rock", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Sugar, We're Going Down", "Fall Out Boy", "01/01/09", "Happy", "0.8", "Rock", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Bohemian Rhapsody", "Queen", "01/01/75", "Happy", "0.7", "Rock", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("We Will Rock You", "Queen", "01/01/77", "Ecstatic", "0.9", "Rock", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Go Your Own Way", "Fleetwood Mac", "01/01/77", "Happy", "0.6", "Rock", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Bad Romance", "Lady Gaga", "01/01/09", "Meh", "0.7", "Pop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Love Game", "Lady Gaga", "01/01/08", "Happy", "0.8", "Pop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Poker Face", "Lady Gaga", "01/01/08", "Happy", "0.7", "Pop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("We Can't Stop", "Miley Cyrus", "01/01/13", "Ecstatic", "0.7", "Pop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Party In The USA", "Miley Cyrus", "01/01/09", "Happy", "0.6", "Pop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("TGIF", "Katy Perry", "01/01/10", "Ecstatic", "1.0", "Pop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Fireworks", "Katy Perry", "01/01/10", "Ecstatic", "0.7", "Pop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("One Last Time", "Ariana Grande", "01/01/14", "Happy", "0.5", "Pop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Dangerous Woman", "Ariana Grande", "05/20/16", "Meh", "0.4", "Pop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Look What You Made Me Do", "Taylor Swift", "01/01/17", "Angry", "0.6", "Pop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Shake It Off", "Taylor Swift", "01/01/14", "Ecstatic", "0.8", "Pop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Hit Me Baby, One More Time", "Britney Spears", "01/01/98", "Sad", "0.7", "Pop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Piece of Me", "Britney Spears", "01/01/07", "Happy", "0.7", "Pop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Toxic", "Britney Spears", "01/01/03", "Happy", "0.7", "Pop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Hands To Myself", "Selena Gomez", "01/01/15", "Meh", "0.5", "Pop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Fetish", "Selena Gomez", "01/01/17", "Meh", "0.4", "Pop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Breakaway", "Kelly Clarkson", "11/30/04", "Sad", "0.2", "Pop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Girls Like You", "Maroon 5", "01/01/17", "Ecstatic", "0.7", "Pop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Sugar", "Maroon 5", "01/01/14", "Happy", "0.6", "Pop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("One Kiss", "Dua Lipa", "01/01/18", "Ecstatic", "0.8", "Pop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("In My Feelings", "Drake", "01/01/18", "Happy", "0.7", "rap/hip-hop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Nice For What", "Drake", "01/01/18", "Happy", "0.6", "rap/hip-hop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Fade", "Kanye West", "01/01/16", "Meh", "0.7", "rap/hip-hop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Father Outstretch Your Hands Pt. 2", "Kanye West", "06/07/16", "Ecstatic", "0.9", "rap/hip-hop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Six Foot Seven Foot", "Lil Wayne", "12/16/10", "Happy", "0.8", "rap/hip-hop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("I Mean It", "G-Eazy", "05/13/14", "Meh", "0.4", "rap/hip-hop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Self-Care", "Mac Miller", "07/12/18", "Meh", "0.3", "rap/hip-hop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Bodak Yellow", "Cardi B", "06/16/17", "Ecstatic", "1.0", "rap/hip-hop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Be Careful", "Cardi B", "03/29/18", "Sad", "0.5", "rap/hip-hop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Bartier Cardi", "Cardi B", "12/22/17", "Ecstatic", "0.9", "rap/hip-hop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Chun-Li", "Nicki Minaj", "04/12/18", "Happy", "0.8", "rap/hip-hop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Moment For Life", "Nicki Minaj", "12/07/10", "Happy", "0.5", "rap/hip-hop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Anaconda", "Nicki Minaj", "08/04/14", "Ecstatic", "1.0", "rap/hip-hop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Love On Top", "Beyonce", "10/16/11", "Happy", "0.6", "rap/hip-hop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Crazy In Love", "Beyonce", "05/18/03", "Ecstatic", "0.8", "rap/hip-hop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("DNA", "Kendrick Lamar", "04/14/17", "Angry", "0.9", "rap/hip-hop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Humble", "Kendrick Lamar", "03/30/17", "Angry", "0.8", "rap/hip-hop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Rude Boy", "Rihanna", "02/19/10", "Happy", "0.8", "rap/hip-hop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Love On The Brain", "Rihanna", "01/27/16", "Sad", "0.4", "rap/hip-hop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Sisters", "Future", "01/01/15", "Meh", "0.5", "rap/hip-hop", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Sleep", "Eric Whitacre", "01/01/10", "Meh", "0.5", "Classical", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Ave Maria", "Josh Groban", "01/01/07", "Sad", "0.7", "Classical", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Lux Aurumque", "Eric Whitacre", "01/01/10", "Meh", "0.3", "Classical", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("London Hymn", "Josh Groban", "01/01/10", "Meh", "0.5", "Classical", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("when david heard", "Eric Whitacre", "01/01/12", "Sad", "0.2", "Classical", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Come What May", "Nicole Kidman and Ewan McGregor", "01/01/08", "Ecstatic", "0.9", "Classical", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Beethoven's 5th Symphony", "Ludwig Van Beethoven", "01/01/08", "Happy", "0.7", "Classical", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Hallelujah", "Lindsey Stirling", "12/07/15", "Meh", "0.2", "Classical", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("The Show Must Go On", "Celine Dion, Lindsey Stirling ", "05/20/16", "Sad", "0.8", "Classical", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("A Thousand Years", "The Piano Guys", "05/09/12", "Happy", "0.5", "Classical", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("The Hobbit Cover", "The Piano Guys", "11/20/12", "Sad", "0.2", "Classical", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Fight Song", "The Piano Guys", "10/29/15", "Happy", "0.9", "Classical", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Bella's Lullaby", "Carter Burwell", "01/01/08", "Sad", "0.1", "Classical", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Pokemon Theme", "Kurt Hugo Schneider, Lindsey Stirling", "", "Ecstatic", "1.0", "Classical", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Hallelujah", "Il Divo", "11/10/08", "Sad", "0.6", "Classical", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Mama", "Il Divo", "01/01/04", "Sad", "0.3", "Classical", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("Regresa a Mi", "Il Divo", "01/01/04", "Sad", "0.7", "Classical", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
       ("The Seal Lullaby ", "Eric Whitacre", "01/01/10", "Happy", "0.1", "Classical", CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3))
>>>>>>> a04ccf8edd216e4e76ea0e72ca252274066d9daa
;


select * from songs;