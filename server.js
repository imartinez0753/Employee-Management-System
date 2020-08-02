const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Zugger9114",
  database: "tracker_db"
});
connection.connect(function (err) {
  if (err) throw err;
  runSearch();
});

function runSearch() {
  inquirer
    .prompt({
      name: "getIt",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "Add department",
        "Add role",
        "Add employees",
        "View roles",
        "View employee",
        "View department",
        "Update employee roles",
        "Update employee manager",
        "View employee by mangager",
        "Delete departments",
        "Delete role",
        "Delete employee",
        "View the total utilized budget of a department"
      ]
    })
    .then(function (answer) {
      switch (answer.getIt) {
        //TODO
        case "Add department":
          addDepartment();
          break;

        //TODO
        case "Add role":
          addRole();
          break;

        //TODO
        case "Add employees":
          addEmployee();
          break;

        //TODO
        case "View roles":
          viewRole();
          break;

        //TODO
        case "View employee":
          viewEmployee();
          break;

        //TODO
        case "View department":
          viewDepartment();
          break;

        //TODO
        case "Update employee roles":
          updateEmployeeRole();
          break;

        case "Update employee manager":
          updateEmployeeManager();
          break;

        case "View employee by mangager":
          viewEmployeeByManager();
          break;

        case "Delete departments":
          deleteDepartment();
          break;

        case "Delete role":
          deleteRole();
          break;

        case "Delete employee":
          deleteEmployee();
          break;

        case "View the total utilized budget of a department":
          viewDepartmentBudget();
          break;
      }
    });
}

// Add departments, roles, employees
function addDepartment() {
  console.log("needs to be completed");
}

function addRole() {
  console.log("this isn't finished");
}

function addEmployee() {
  console.log("this isn't done yet");
}

// View departments, roles, employees

function viewEmployeeByManager() {
  console.log("this is not done");
}

function viewRole() {
  var query = "SELECT * FROM role";
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
  });

  //console.log("this is not done");
}

function viewDepartment() {
  var query = "SELECT * FROM department";
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
  });
  //console.log("this is not done");
}

function viewEmployee() {
  var query = "SELECT * FROM employee";
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
  });
  //console.log("this is not done");
}

// Update employee roles

function updateEmployeeManager() {
  console.log("this is not done");
}

function updateEmployeeRole() {
  console.log("this is not done");
}

//Delete departments, roles, and employees

function deleteDepartment() {
  console.log("this is not done");
}

function deleteRole() {
  console.log("this is not done");
}

function deleteEmployee() {
  console.log("this is not done");
}

//View the total utilized budget of a department

function viewDepartmentBudget() {
  console.log("this is not done");
}
