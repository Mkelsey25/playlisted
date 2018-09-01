/*
//Author: Morgan Hamlin

//DEPENDENCIES
var passport = require('passport');
var LocalStrategy   = require('passport-local').Strategy;
var flash = require('connect-flash');
var User = require('../public/assets/js/user');

var mysql = require('mysql');

var connection = mysql.createConnection({
				  host     : 'localhost:3306',
				  user     : 'root',
				  password : 'Wubbs#2557'
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
        console.log(username, password);


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
	//Login
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

//Routes for passport (need to be added to routes folder)

app.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: true })
);*/

var LocalStrategy   = require('passport-local').Strategy;

// load up the user model
var mysql = require('mysql');
var bcrypt = require('bcrypt');
//var dbconfig = require('./database');

var config = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Wubbs#2557",
    database: "bamazon"
};
var connection = mysql.createConnection(config);

connection.query('USE ' + config.database);

module.exports = function(passport) {

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        connection.query("SELECT * FROM users WHERE id = ? ",[id], function(err, rows){
            done(err, rows[0]);
        });
    });

    //Need to figure out where username changes to user_name and password --> user_password
    passport.use(
        'local-signup',
        new LocalStrategy({
            usernameField : 'username',
            passwordField : 'password',
            passReqToCallback : true
        },
        function(req, username, password, done) {
            connection.query("SELECT * FROM users WHERE username = ?",[username], function(err, rows) {
                if (err)
                    return done(err);
                if (rows.length) {
                    return done(null, false, req.flash('signupMessage', 'That username is already taken.'));
                } else {
                        //create a new user 

                    var newUser = {
                        username: username,
                        password: bcrypt.hashSync(password, bcrypt.genSaltSync(10))  // use the generateHash function in our user model
                    };

                    var insertQuery = "INSERT INTO users ( username, password ) values (?,?)";

                    connection.query(insertQuery,[newUser.username, newUser.password],function(err, rows) {
                        newUser.id = rows.insertId;

                        return done(null, newUser);
                    });
                }
            });
        })
    );

    passport.use('local-login',new LocalStrategy({
            usernameField : 'username',
            passwordField : 'password',
            passReqToCallback : true
        },
        function(req, username, password, done) {
            connection.query("SELECT * FROM users WHERE username = ?",[username], function(err, rows){
                if (err)
                    return done(err);
                if (!rows.length) {
                    return done(null, false, req.flash('loginMessage', 'No user by that name was found.'));
                }

                // wrong password
                if (!bcrypt.compareSync(password, rows[0].password))
                    return done(null, false, req.flash('loginMessage', 'Wrong password.'));

                //success
                return done(null, rows[0]);
            });
        })
    );
};