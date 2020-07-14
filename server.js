const mysql = require("mysql");
const inquirer = require("inquirer");

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
     connection.end();
    });
     
}