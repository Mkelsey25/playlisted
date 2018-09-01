/*
var express = require('express');
var router = express.Router();
var User = require('../../../models/users');


module.exports = function(passport) {
    router.post('/sign-up', function(res, req) {
        var body = req.body,
        username = body.username,
        password = body.password,
        email = body.email;
        User.findOne({username: username}, function(err, doc) {
            if(err) {
                console.log(err);
                res.status(500).send('error occured');
            }
            else {
                if(doc) {
                    res.status(500).send('Username already exists');
                }
                else {
                    var record = new User();
                    record.username = username;
                    record.password = record.hashPassword(password);
                    record.email = email;
                    record.save(function(err, user){
                        if(err) {res.status(500).send('DB error')}
                        else {
                            res.send(user);
                        }
                    })
                }
            }
        })
    });

router.post('/login', passport.authenticate('local', {
    failureRedirect: '/login',
    failureRedirect: '/index'
}), function(req, res) {
    res.send('hey')
})

    return router;
};
*/

module.exports = function(app, passport, SERVER_SECRET) {

    // default message
    app.get('/', function (req, res) {
      res.send('<html><body><p>Welcome to the database</p></body></html>');
    });
  

  
    app.post('/login', function(req, res, next) {
    passport.authenticate('local-login', function(err, user, info) {
        if (err) { return next(err); }
        // stop if it fails
        if (!user) { return res.json({ message: 'Invalid Username of Password' }); }
  
        req.logIn(user, function(err) {
          // return if does not match
          if (err) { return next(err); }
  
          // generate token if it succeeds
          const db = {
            updateOrCreate: function(user, cb){
              cb(null, user);
            }
          };
          db.updateOrCreate(req.user, function(err, user){
            if(err) {return next(err);}
            // store the updated information in req.user again
            req.user = {
              id: user.username
            };
          });
  
          return res.status(200).json({
            user: req.user,
          });
        });
      })(req, res, next);
    });
  
    app.post('/sign-up', passport.authenticate('local-signup', {
      successRedirect : '/sign-up/successjson',
      failureRedirect : '/sign-up/failurejson',
      failureFlash : true
      }));
    // return messages for signup users
    app.get('/sign-up/successjson', function(req, res) {
      res.json({ message: 'Successfully created user' });
    });
  
    app.get('/sign-up/failurejson', function(req, res) {
      res.json({ message: 'This user already exists' });
    });
};  