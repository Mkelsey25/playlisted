var express = require('express');
var router = express.Router();
var User = require('../../../models/users');


module.exports = function(passport) {
    router.post('/sign-up', function(res, req) {
        var body = req.body,
        username = body.username,
        password = body.password;
        User.findOne({username: user_name}, function(err, doc) {
            if(err) {
                res.status(500).send('error occured');
            }
            else {
                if(doc) {
                    res.status(500).send('Username already exists');
                }
                else {
                    var record = new User();
                    record.username = username;
                    record.password = record.hashPassword(password)
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