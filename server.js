const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 8080,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "tracker_db"
});
