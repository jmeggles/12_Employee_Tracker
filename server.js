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
  connection.query("SELECT * from employees", function (error, results) {
      if (error) throw error;
     console.table(results);

    // pending queries are sent and connection is terminated
     connection.end();
    });


     
}
function start() {
  inquirer
    .prompt({
      name: "start",
      type: "list",
      message: "What would you like to view: ",
      choices: [
        "Employee", 
        "Role",
        "Department", 
        "Exit"
      ]
    })
    // depending on which title is chosen, the next set of required info will be asked.
    .then(({ start }) => {

      switch (start) {
        // if employee is selected...or...
        case "Employee":
          employee();
          break;

        // if role is selected...or...
        case "Role":
          role();
          break;

        // if department is selected...or...
        case "Department":
          department();
          break;

        // if no more employees selected. 
        case "Exit":
          exit()
          break
      }
    })
}
// if employee is selected... 
function employee() {
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
      }
    ])
  }     

//     // answers are written to the markdown file
//     .then(({ mgrName, mgrId, mgrEmail, mgrPhone }) => {
//       // collects all inputs
//       const manager = new Manager(mgrName, mgrId, mgrEmail, mgrPhone);
//       employees.push(manager);

//       createCard();
//     })
// }