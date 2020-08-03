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
          // again();
          break;

        //TODO
        case "View department":
          viewDepartment();

          break;

        //TODO
        case "Update employee roles":
          updateEmployeeRole();
          // again();
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
    .prompt([
      {
        name: "newFirstName",
        type: "input",
        message: "What is the employee's first name?"
      },
      {
        name: "newLastName",
        type: "input",
        message: "What is the employee's last name?"
      },
      {
        name: "newRoleId",
        type: "input",
        message: "What is the employee's role_id?"
      },
      {
        name: "newManagerId",
        type: "input",
        message: "What is the employee's manager_id?"
      }
    ])
    .then(function (res) {
      var query = connection.query(
        "INSERT INTO employee SET ?",
        {
          first_name: res.newFirstName,
          last_name: res.newLastName,
          role_id: res.newRoleId,
          manager_id: res.newManagerId
        },
        function (err, res) {
          if (err) throw err;
          console.log(res.affectedRows + "employee added");
          // Call updateProduct AFTER the INSERT completes
          again();
        }
      );
      console.log(query.sql);
    });

  // console.log("this isn't done yet");
}

// View departments, roles, employees

function viewEmployeeByManager() {
  console.log("this is not done");
}

function viewRole() {
  var query = "SELECT role.title, role.department_id FROM role";
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);

    return res;
  });

  //console.log("this is not done");
}

function viewDepartment() {
  var query = "SELECT department.name, department.id FROM department";
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    again();
    return res;
  });
  //console.log("this is not done");
}

function viewEmployee() {
  var query = "SELECT employee.first_name, employee.last_name FROM employee";
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    again();
    // return res;
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
  var employeeQuery =
    "SELECT employee.first_name, employee.last_name, employee.id FROM employee";
  connection.query(employeeQuery, function (err, employeeRes) {
    if (err) throw err;
    var roleQuery = "SELECT role.title, role.department_id FROM role";
    connection.query(roleQuery, function (err, roleRes) {
      if (err) throw err;
      // console.log(res[0].first_name + " " + res[0].last_name);

      inquirer
        .prompt([
          {
            name: "employeeId",
            type: "rawlist",
            message: "What is the employees first and last name?",
            choices: function () {
              var employeeChoicesArr = [];
              for (var i = 0; i < employeeRes.length; i++) {
                employeeChoicesArr.push(
                  employeeRes[i].first_name + " " + employeeRes[i].last_name
                );
              }
              return employeeChoicesArr;
            }
          },
          {
            name: "newRole",
            type: "rawlist",
            message: "What is the new role?",
            choices: function () {
              var roleChoicesArr = [];
              for (var i = 0; i < roleRes.length; i++) {
                roleChoicesArr.push(roleRes[i].title);
              }
              return roleChoicesArr;
            }
          }
        ])
        .then(function (answer) {
          console.log(answer);

          var chosenEmployee;
          for (var i = 0; i < employeeRes.length; i++) {
            if (
              employeeRes[i].first_name + " " + employeeRes[i].last_name ===
              answer.employeeId
            ) {
              chosenEmployee = employeeRes[i];
              console.log(chosenEmployee.id);
            }
          }
          // console.log(answer.newRole);
          var chosenRole;
          for (var i = 0; i < roleRes.length; i++) {
            // console.log(roleRes[i]);
            if (roleRes[i].title === answer.newRole) {
              chosenRole = roleRes[i];
              console.log(chosenRole.department_id);
            }
          }
          connection.query(
            "UPDATE employee SET ? WHERE ?",
            [
              { role_id: chosenRole.department_id },
              {
                id: chosenEmployee.id
              }
            ],
            function (error) {
              if (error) throw err;
              console.log("updated successfully!");
              again();
            }
          );
        });
    });
  });
}

//Delete departments, roles, and employees

function deleteDepartment() {
  var query = "SELECT department.name, department.id FROM department";
  connection.query(query, function (err, res) {
    if (err) throw err;

    inquirer
      .prompt({
        name: "deleteDep",
        type: "rawlist",
        message: "which depratment would you like to delete?",
        choices: function () {
          var deleteChoice = [];
          for (i = 0; i < res.length; i++) {
            deleteChoice.push(res[i].name);
          }
          console.log(deleteChoice);
          return deleteChoice;
        }
      })
      .then(function (answer) {
        var chosendepartment;
        for (var i = 0; i < res.length; i++) {
          if (res[i].name === answer.deleteDep) {
            chosendepartment = res[i];
            console.log(chosendepartment.id);
          }
        }

        console.log("Deleting department.\n");
        connection.query(
          "DELETE FROM department WHERE ?",
          {
            name: chosendepartment.name
          },
          function (err, res) {
            if (err) throw err;
            console.log(res.affectedRows + " department deleted!\n");
            // Call readProducts AFTER the DELETE completes
            viewDepartment(function () {
              again();
            });
          }
        );
      });
  });
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
