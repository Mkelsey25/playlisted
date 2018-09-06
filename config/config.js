// const dotenv = require('dotenv').config();
require('dotenv').config({ silent: process.env.NODE_ENV === 'production' })      //keeps error from shoing in Heroku log)
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

module.exports = 
{
  "development": {
    "username": process.env.DB_DEV_USERNAME,
    "password": process.env.DB_DEV_PASSWORD,
    "database": process.env.DB_DEV_DATABASE,
    "host": process.env.DB_DEV_HOST,
    "port": process.env.DB_DEV_PORT,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "enter_password",
    "database": "database_test",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.HEROKU_USERNAME,
    "password": process.env.HEROKU_PASSWORD,
    "database": process.env.HEROKU_DATABASE,
    "host": process.env.HEROKU_HOST,
    "port": process.env.HEROKU_PORT,
    "dialect": "mysql"
  }
}