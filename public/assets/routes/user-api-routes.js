///////////////////////////////////////////////////////////////////////////////////////////////////
// File Name: user-api-routes.js 
//
// Description: This file offers a set of routes for displaying and saving user data to the db
///////////////////////////////////////////////////////////////////////////////////////////////////

// Requiring our models
var db = require("./../../../models");

/////////////////
// Routes
/////////////////
module.exports = function(app) {

  /////////////////////////////////////////////
  // GET route for getting ALL of the users
  /////////////////////////////////////////////
  app.get("/api/users", function(req, res) {
    var query = {};

    console.log("route: all users");
    console.log(JSON.stringify(req.body));

    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    };

    db.Users.findAll({
      where: query
    }).then(function(dbResult) {
      // res.json(dbResult);          // send as json

      // send to handlebars
      var hbsObject = {
        users: dbResult
      };
      res.render("users", hbsObject);
    });
  });

  /////////////////////////////////////////////
  // GET route for retrieving ONE user
  /////////////////////////////////////////////
  app.get("/api/users/:id", function(req, res) {

    console.log("route: specific user");
    console.log(JSON.stringify(req.body));

    db.Users.findAll({
      where: {
        user_id: req.params.id
      }
    }).then(function(dbResult) {
      // res.json(dbResult);          // send as json

      // send to handlebars
      var hbsUser = {
        user: dbResult
      };
      // console.log(dbResult);
      res.render("users", hbsUser);
    });
  });

  /////////////////////////////////////////////
  // POST route for CREATE a new user
  /////////////////////////////////////////////
  app.post("/api/users", function(req, res) {

    console.log("route: create user");
    console.log(JSON.stringify(req.body));

    db.Users.create(req.body).then(function(dbResult) {
      console.log("User created.");

      res.json(dbResult);          // send as json
    });
  });

  /////////////////////////////////////////////
  // DELETE route for deleting a user
  /////////////////////////////////////////////
  app.delete("/api/users/:id", function(req, res) {
    
    console.log("route: delete a user");
    console.log(JSON.stringify(req.body));
    
    db.Users.destroy({
      where: {
        user_id: req.params.id        //req.body.id if send in body
      }
    }).then(function(dbResult) {
      console.log("after the deletion of user");

      res.json(dbResult);          // send as json
    });
  });

  /////////////////////////////////////////////
  // PUT route for UPDATE
  /////////////////////////////////////////////
  app.put("/api/users/:id", function(req, res) {

    console.log("route: update user");
    console.log(JSON.stringify(req.body));

    var id = (req.params.id) ? req.params.id : req.body.id;

    db.Users.update(
      {
        user_name: req.body.user_name,
        user_password: req.body.user_password
      },
      {
        where: {
          user_id: id
        }
      }).then(function(dbResult) {
        res.json(dbResult);
    });
  });
};


  /////////////////////////////////////////////////////////////////////
  // res.status(404)        // HTTP status 404: NotFound
  // .send('Not found')
  /////////////////////////////////////////////////////////////////////