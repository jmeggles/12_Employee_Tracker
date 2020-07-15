// connects mysql DB and perform queries
const mysql = require("mysql");

// to interact with the user
const inquirer = require("inquirer");

// prints tables to the console
const console = require("console.table");

// prints console info in different colors for better viewing.
const chalk = require("chalk");

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

// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("connected as id " + connection.threadId);
//   connection.end();
// });


// connect to the mysql server and sql database
connection.connect(function(err) {
  // in the callback, if we get an error, wrong info is used
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
  });

// prompts user with the intial question 
function start() {
  connection.query("SELECT * FROM employees", function (error, results) {
      if (error) throw error;
     console.table(results);

    // pending queries are sent and connection is terminated
     connection.end();
    });
}

function start() {
  inquirer
    .prompt({
      name: "menu",
      type: "list",
      message: "What would you like to do? ",
      choices: [
        "View all employees", 
        "View employees by role",
        "View employees by department",
        "View employees by manager",
        "Add new employee", 
        "Exit"
      ]
    })
    // depending on which menu list is chosen, the next set of required info will be asked.
    .then(({ menu }) => {
      switch (menu) {
        // if employee is selected...or...
        case "Employee":
          byEmpl();
          break;

        // if role is selected...or...
        case "Role":
          byRole();
          break;

        // if department is selected...or...
        case "Department":
          byDept();
          break;
        // if add new empl is selected...or...
        case "Add new employee":
          newEmployee();
          break;

        // if user chooses to exit application. 
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
      const manager = new Manager(mgrName, mgrId, mgrEmail, mgrPhone);
      employees.push(manager);

      createNewEmplyee();
    })
}

function byEmpl() {
  connection.query("SELECT * FROM employees ORDER BY id", function (error, results) {
      if (error) throw error;
     console.table(results);

    // pending queries are sent and connection is terminated
     connection.end();
    });
}
function byRole() {
  connection.query("SELECT * FROM role ORDER BY id", function (error, results) {
      if (error) throw error;
     console.table(results);

    // pending queries are sent and connection is terminated
     connection.end();
    });
}
function byDept() {
  connection.query("SELECT * FROM department ORDER BY id", function (error, results) {
      if (error) throw error;
     console.table(results);

    // pending queries are sent and connection is terminated
     connection.end();
    });
}