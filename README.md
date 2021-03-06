# Playlisted

PlayListed is a full stack project that uses Express, MySQL, Sequelize and Handlebars to create a recommended playlist of songs based on user preferences such as mood, energy, and genre.

**Problem it solves:** \
Identify and manage a personalized playlist of song recommendations according to mood, energy level, and genre. \
**How solved:** \
Perform searches against a song library that matches attributes to user preferences. \
**Technical approach:** \
MySQL is used as the backend to manage users, songs, and playlists leveraging the Sequelize ORM and implemented with the MVC design pattern.  Handlebars and static pages are used for UI/UX on CSS3 and HTML5 in combination with Bootstrap.  An api is available to perform CRUD operations against the users, songs and playlists from the front-end via AJAX requests.  Passport is used for user authentication.

## Getting Started
 
### Prequisites

Node, NPM and a command line tool such as GitBash.

### Installing

To get a development environment up and running, clone the repository locally.

From the command line, execute the below to setup the project:

```

$ npm install path --save
$ npm install sequelize --save
$ npm install mysql2 --save
$ npm install express --save
$ npm install express-handlebars --save
$ npm install dotenv --save
$ npm install body-parser --save
$ npm install moment --save
$ npm install bcrypt --save
$ npm install express-validator --save
$ npm install cookie-parser --save
$ npm install passport --save
$ npm install connect-flash --save
$ npm install nodemailer --save
$ npm install request --save

npm install chai --save
npm install chai-http --save

```
Create an .env file at the root of the project and populate with connection info.

```
# Heroku keys

HEROKU_USERNAME=
HEROKU_PASSWORD=
HEROKU_DATABASE=
HEROKU_HOST=
HEROKU_PORT=3306

# Local DB

DB_DEV_USERNAME="ENTER_DB_USER_NAME_HERE"
DB_DEV_PASSWORD="ENTER_PASSWORD_HERE"
DB_DEV_DATABASE="ENTER_DB_NAME_HERE"
DB_DEV_HOST="127.0.0.1"
DB_DEV_PORT=3306

```

## Running tests

Unit testing was done against all routes from end-to-end and functionally tested by team mates.

## Deployment

The project is deployed to Heroku pages at TBD

## Built With

Express, MySql, Sequelize, JQuery, HTML5, CSS3, Bootstrap, Font Awesome, Passport

## Contributing

N/A

## Versioning

This is version 0.1

## Authors

* **Jenni Coleman** - *Design, Express server, MVC, Routes, Sequelize, AJAX calls (songs, users, playlists), Bcrypt and Handlebars*
* **James Cowart** - *Front-End Design, Logo Creation, Handlebars.js, API Logic, Responsive Design, Unit Testing*
* **Rebecca Wieberdink** - *Wireframe, MySQL, Sequelize, Unit Testing, Heroku, Spotify Authentication and API (Coming Soon)*
* **Morgan Hamlin** - *Local Authentication and Sign-Up, Music Data, NodeMailer, Heroku, Passport.js (Coming Soon)*

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

N/A
