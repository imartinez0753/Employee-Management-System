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

function again() {
  inquirer
    .prompt({
      name: "repeat",
      type: "confirm",
      message: "Do you have more to do?"
    })
    .then(function (res) {
      switch (res.repeat) {
        case true:
          runSearch();
          break;
        case false:
          connection.end();
          break;
      }
    });
}

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
  inquirer
    .prompt({
      name: "newName",
      type: "input",
      message: "What is the departments Name?"
    })
    .then(function (res) {
      var query = connection.query(
        "INSERT INTO department SET ?",
        {
          name: res.newName
        },
        function (err, res) {
          if (err) throw err;
          console.log(res.affectedRows + "department added");
          // Call updateProduct AFTER the INSERT completes
          again();
        }
      );
      console.log(query.sql);
    });

  //console.log("needs to be completed");
}

function addRole() {
  inquirer
    .prompt([
      {
        name: "newTitle",
        type: "input",
        message: "What is the new role?"
      },
      {
        name: "newSalary",
        type: "input",
        message: "What is the Salary?"
      },
      {
        name: "newDepartment_id",
        type: "input",
        message: "What is this department number?"
      }
    ])
    .then(function (res) {
      console.log(res);
      var query = connection.query(
        "INSERT INTO role SET ?",
        {
          title: res.newTitle,
          salary: res.newSalary,
          department_id: res.newDepartment_id
        },
        function (err, res) {
          if (err) throw err;
          console.log(res.affectedRows + "Role added");
          // Call updateProduct AFTER the INSERT completes
          again();
        }
      );
      console.log(query.sql);
    });

  //  console.log("this isn't finished");
}

function addEmployee() {
  inquirer
    .prompt({
      name: "newName",
      type: "input",
      message: "What is the departments Name?"
    })
    .then(function (res) {
      var query = connection.query(
        "INSERT INTO department SET ?",
        {
          name: res.newName
        },
        function (err, res) {
          if (err) throw err;
          console.log(res.affectedRows + "department added");
          // Call updateProduct AFTER the INSERT completes
          again();
        }
      );
      console.log(query.sql);
    });

  console.log("this isn't done yet");
}

// View departments, roles, employees

function viewEmployeeByManager() {
  console.log("this is not done");
}

function viewRole() {
  var query = "SELECT title FROM role";
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    again();
  });

  //console.log("this is not done");
}

function viewDepartment() {
  var query = "SELECT * FROM department";
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    again();
  });
  //console.log("this is not done");
}

function viewEmployee() {
  var query = "SELECT * FROM employee";
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    again();
  });
  //console.log("this is not done");
}

// Update employee roles

function updateEmployeeManager() {
  var mystring = "this is not done";
  return mystring;
}
// updateEmployeeManager().then(function (res) {
//   console.log(res);
// });
function updateEmployeeRole() {
  inquirer
    .prompt({
      name: "roleId",
      type: "list",
      message: "What is the employees first and last name?",
      choices: []
    })
    .then(function (res) {
      switch (res.roleId) {
        case "answer1":
          break;
      }
    });
  var query = connection.query(
    "UPDATE employee SET ? WHERE ?",
    [
      {
        quantity: 100
      },
      {
        flavor: "Rocky Road"
      }
    ],
    function (err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " products updated!\n");
      // Call deleteProduct AFTER the UPDATE completes
      deleteProduct();
    }
  );
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

//
