drop database if exists playlisted_db;
create database playlisted_db;
use playlisted_db;

-- drop table if exists users;
create table users (
	user_id int auto_increment not null,
	user_name varchar(50) not null,
	user_email varchar(50) not null,
	user_password BLOB not null,
	role enum('user', 'admin', 'disabled') default 'user' not null,
	createdAt datetime default current_timestamp not null,
	updatedAt datetime on update current_timestamp not null,
	primary key (user_id)
);

-- drop table if exists songs;
create table songs (
	song_id int auto_increment not null,
	song_title varchar(50) not null,
	artist_name varchar(50),
	date_released varchar(8),
    mood enum('Angry', 'Sad', 'Meh', 'Happy', 'Ecstatic') not null,
    energy enum('0.1', '0.2', '0.3', '0.4', '0.5','0.6','0.7','0.8', '0.9', '1.0') not null,
	genre enum('rock', 'classical', 'easy listening', 'pop', 'rap/hip-hop', 'unknown') default 'unknown' not null,
	createdAt datetime default current_timestamp not null,
	updatedAt datetime on update current_timestamp not null,
	primary key (song_id)
);
-- todo: date_released would be more valid as DATE instead of varchar(8)
-- rock: rock, alternative, hardcore
-- instrumental: non-lyrical, classical, soundtracks
-- easy listening: oldies, folk 

-- drop table if exists playlist;
create table playlists (
	playlist_id int auto_increment not null,
	playlist_name varchar(50) not null,
	create_date datetime default current_timestamp not null,
	modify_date datetime on update current_timestamp not null,
    primary key (playlist_id)
);

-- drop table if exists playlist_user_songs;
create table playlist_user_songs (
	playlist_user_songs_id int auto_increment not null,
    playlist_id int not null,
	user_id int not null,
	song_id int not null,
	create_date datetime default current_timestamp not null,
	modify_date datetime on update current_timestamp not null,
	primary key (playlist_user_songs_id),
	constraint FK_user foreign key (user_id)
	   references users(user_id)
	   on update cascade,
	constraint FK_song foreign key (song_id)
		references songs(song_id)
		on update cascade
);

-----------------------------
-- Queries 
-----------------------------
-- get the songs
select * from users;
select * from songs;
select * from playlists;

-- get all the songs in a playlist
select *
from playlist_user_songs p inner join songs s
on p.song_id = s.song_id
where playlist_id = 1;

--------------------------------------------------------------------------
-- to bypass foreign key checks on table alters set to 0
-- make sure to set it right back to 1 and that FK data is referenceable
--
-- if you are just trying to drop and recreate a table when no data is
-- in the FK table, this is fine to do but set it right back
--------------------------------------------------------------------------
SET FOREIGN_KEY_CHECKS = 0;
-- declare tables
SET FOREIGN_KEY_CHECKS = 1;