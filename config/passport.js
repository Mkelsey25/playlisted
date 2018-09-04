
//Author: Morgan Hamlin

//DEPENDENCIES
/*var passport = require('passport');
var LocalStrategy   = require('passport-local').Strategy;
var flash = require('connect-flash');
var User = require('../models/users');

var mysql = require('mysql');

var connection = mysql.createConnection({
				  host     : 'localhost:3306',
				  user     : 'root',
				  password : ''
				});

connection.query('USE playlisted_db');	


module.exports = function(passport) {

    passport.serializeUser(function(user, done) {
		done(null, user.id);
    });

 
    passport.deserializeUser(function(id, done) {
		connection.query("select * from users where id = " + id, function(err,rows){	
			done(err, rows[0]);
		});
    });

    // Sign up

    passport.use('local-signup', new LocalStrategy({
        usernameField : 'user_name',
        passwordField : 'user_password',
        passReqToCallback : true 
    },
    function(req, username, password, done) {


        connection.query("select * from users where user_name = '" + username +"'",function(err,rows){
			if (err)
                return done(err);
			 if (rows.length) {
                return done(null, false, req.flash('Message', 'That email is already taken.'));
            } else {

                var newUserMysql = new Object();
				
				newUserMysql.username    = username;
                newUserMysql.password = password; 
			
				var insertQuery = "INSERT INTO users ( user_name, user_password ) values ('" + username +"','"+ password +"')";
					console.log(insertQuery);
				connection.query(insertQuery,function(err,rows){
				newUserMysql.id = rows.insertId;
				
				return done(null, newUserMysql);
				});	
            }	
		});
    }));
	
    passport.use('local-login', new LocalStrategy({

        usernameField : 'user_name',
        passwordField : 'user_password',
        passReqToCallback : true 
    },
    function(req, username, password, done) { 

         connection.query("SELECT * FROM 'users` WHERE `user_name` = '" + username + "'",function(err,rows){
			if (err)
                return done(err);
			 if (!rows.length) {
                return done(null, false, req.flash('loginMessage', 'No user found.')); 
            } 
			
            if (!( rows[0].password == password))
                return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata
			

            return done(null, rows[0]);			
		
		});
		


    }));

};

///////////////////////////////////////////////////////////////////////////////

//Routes for passport (need to be added to routes folder)*/

/*app.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: true })
);*/