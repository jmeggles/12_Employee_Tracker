// connects mysql DB and perform queries
const mysql = require("mysql");

// to interact with the user
const inquirer = require("inquirer");

// prints tables to the console
//console.table = require("console.table");

// prints console info in different colors for better viewing.
// const chalk = require("chalk");

// creates the connection
const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "rootroot",
  database: "employeeDB"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
  // in the callback, if we get an error, wrong info is used
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

// prompts user with the intial question 
// function start() {
//   connection.query("SELECT * FROM employees", function (error, results) {
//     if (error) throw error;
//     console.table(results);

//     // pending queries are sent and connection is terminated
//     // connection.end();
//   });
// }

function start() {
  inquirer
    .prompt({
      name: "menu",
      type: "list",
      message: "What would you like to do? ",
      choices: [
        "View all employees",
        "View all departments",
        "View all roles",
        // "View employees by role",
        // "View employees by department",
        // "View employees by manager",
        "Add new employee",
        "Add new department",
        "Add new role",
        "Update employee role",
        "Exit"
      ]
    })
    // depending on which menu list is chosen, the next set of required info will be asked.
    .then(({ menu }) => {
      switch (menu) {
        // if employee is selected...or...
        case "View all employees":
          allEmpl();
          break;

        // if role is selected...or...
        case "View all roles":
          allRole();
          break;

        // if department is selected...or...
        case "View all departments":
          allDept();
          break;

        // if add new empl is selected...or...
        case "Add new employee":
          newEmployee();
          break;

        case "Add new department":
          newDepartment();
          break;

        case "Add new role":
          newRole();
          break;

        case "Update employee role":
          updateEmployeeRole();
          break;

        case "Exit":
          exit()
          break
      }
    })
}

// if add new employee is selected...
// this works when new employee is selected from the menu list.
// does not save or send info after inputs though. 
function newEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "firstName",
        message: "Employee's first name?"
      },
      {
        type: "input",
        name: "lastName",
        message: "Employee's last name?"
      },
      {
        type: "input",
        name: "roleId",
        message: "Employee's role ID?"
      },
      {
        type: "input",
        name: "mgrId",
        message: "Employee's manager's ID?"
      },
    ])


    //     // answers are written to database
    .then(({ mgrName, mgrId, mgrEmail, mgrPhone }) => {

      // collects all inputs

      console.table(results);

    })
}

function newDepartment() {

}

function newRole() {

}

function updateEmployeeRole() {

}

function allEmpl() {
  let qry = "SELECT "

  qry += "E.id as EmployeeId, "
  qry += "E.firstName as EmployeeFirstName, "
  qry += "E.lastName as EmployeeLastName, "
  qry += "E.mgrId as ManagerId, "
  qry += "E.roleId, "

  qry += "R.deptId, "
  qry += "R.title, "
  qry += "R.salary, "

  qry += "D.deptName, "

  qry += "M.firstName as ManagerFirstName, "
  qry += "M.lastName as ManagerLastName "
  
  qry += "FROM employee E "

  qry += "JOIN role R "
  qry += "ON E.roleId = R.id "

  qry += "JOIN department D "
  qry += "ON R.deptId = D.id "

  qry += "JOIN employee M "
  qry += "ON E.mgrId = M.id "

  connection.query(qry, function (error, results) {
    if (error) throw error;
    console.table(results);
    start()
  });
}


function allRole() {
  let qry = "SELECT "

  qry += "R.deptId, "
  qry += "R.title, "
  qry += "R.salary, "
  
  qry += "D.deptName "
  
  qry += "FROM role R "
  
  qry += "JOIN department D "
  qry += "ON R.deptId = D.id "
  
  connection.query(qry, function (error, results) {
    if (error) throw error;
    console.table(results);
    start()
  });
}

function allDept() {
  connection.query("SELECT * FROM department", function (error, results) {
    if (error) throw error;
    console.table(results);
    start()
  });
}

function exit() {
  connection.end()
}