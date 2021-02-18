"use strict";

var mysql = require('mysql'); // const pool = mysql.createPool({
//   host: '157.245.105.18',
//   port: '6033',
//   user: 'reward',
//   database: 'rewardeagle_db',
//   password: '2xTaBbDGTUWa',
//   multipleStatements: true
// });


const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'reward',
  password: '',
  multipleStatements: true
});
module.exports = pool;