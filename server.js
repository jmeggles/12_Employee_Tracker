// connects mysql DB and perform queries
const mysql = require("mysql");

// to interact with the user
const inquirer = require("inquirer");

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

// connect to the mysql server and sql database
connection.connect(function (err) {
  // in the callback, if we get an error, wrong info is used
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

// prompts user with the intial question by given a menu to select a query from
function start() {
  inquirer
    .prompt({
      name: "menu",
      type: "list",
      message: "What would you like to do? ",
      choices: [
        "Add new department",
        "Add new role",
        "Add new employee",
        "View all departments",
        "View all roles",
        "View all employees",
        "Update employee role",
        // Update employee manager",
        // "View employees by manager",
        // "View employees by role",
        // "Delete departments, roles, employees",
        "Exit"
      ]
    })
    // depending on which query is chosen, the next set of required info will be asked.
    .then(({ menu }) => {
      switch (menu) {
        case "Add new department":
          newDepartment();
          break;

        case "Add new role":
          newRole();
          break;

        case "Add new employee":
          newEmployee();
          break;

        case "View all roles":
          allRole();
          break;
  
        case "View all departments":
          allDept();
          break;  

        case "View all employees":
          allEmpl();
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

//  >>>>>>>>>>>>>>>>>>  ADD  <<<<<<<<<<<<<<<<<<<<<<<  //

// add new department
function newDepartment() {
  inquirer
    .prompt({
      type: "input",
      name: "newDept",
      message: "Enter new department name: ",
    })
    .then(function(answer) {
      connection.query(
        "INSERT INTO department SET ?",
        {
          deptName: answer.newDept
        },
        function(err, answer) {
          if (err) {
            throw err;
          }
        }
      ),
        console.log("Success! New department added.", answer);
      start();
    });
}

// function newDepartment() {
//   inquirer
//     .prompt([
//       {
//         name: "newDept",
//         type: "input",
//         message: "Enter name of department: "
//       }
//     ])


//     // .then(function (answer) {
//     //   let deptName;
//     //   for (let i = 0; i < res.length; i++) {
//     //     if (res[i].title == answer.department) {
//     //       deptName = res[i].id;
//     //       console.log(deptName)
//     //     }
//     //   }
//     //   connection.query("INSERT INTO department SET ?",
//     //     {
//     //       deptName: deptName,
//     //     },
//     //     function (err) {
//     //       if (err) throw err;
//     //       console.log("Success! Department added.");
//     //       start();





//     .then(function (answer) {
//       connection.query("INSERT INTO department (name) VALUES (?) ",
//         {
//           deptName: answer.deptName
//         }
//       );      
//       // var query = "SELECT * FROM department ";
//       connection.query(query, function (err, res) {
//         if (err) throw err;
//         console.table("Success! Added new department. ", res);
//         start();
//       })
//     })
// }

// add new title/role
function newRole() {
  connection.query("SELECT * FROM department", function (err, res) {
    if (err) throw err;

    inquirer
      .prompt([
        {
          name: "newRole",
          type: "input",
          message: "Enter new title: "
        },
        {
          name: "salary",
          type: "input",
          message: "Enter salary for this title: "
        },
        {
          name: "department",
          type: "list",
          choices: function () {
            var deptArr = [];
            for (let i = 0; i < res.length; i++) {
              deptArr.push(res[i].name);
            }
            return deptArr;
          },
        }
      ])
      .then(function (answer) {
        let deptId;
        for (let i = 0; i < res.length; i++) {
          if (res[i].name == answer.deptChoice) {
            deptId = res[i].id;
          }
        }
        connection.query("INSERT INTO role SET ?",
          {
            title: answer.newRole,
            salary: answer.salary,
            deptId: deptId
          },
          function (err, res) {
            if (err) throw err;
            console.log("Success! Title has been added.");
            start();
          }
        )
      })
  })
}

// add new employee
function newEmployee() {
  connection.query("SELECT * FROM role", function (err, res) {
    if (err) throw err;

    inquirer
      .prompt([
        {
          name: "firstName",
          type: "input",
          message: "Enter employee's fist name: ",
        },
        {
          name: "lastName",
          type: "input",
          message: "Enter employee's last name: "
        },
        {
          name: "role",
          type: "list",
          message: "Select employee's role: ",
          choices: function () {
            var emplArr = [];
            for (let i = 0; i < res.length; i++) {
              emplArr.push(res[i].title);
            }
            return emplArr;
          },

        }
      ])
      .then(function (answer) {
        let roleId;
        for (let j = 0; j < res.length; j++) {
          if (res[j].title == answer.role) {
            roleId = res[j].id;
            console.log(roleId)
          }
        }
        connection.query("INSERT INTO employee SET ?",
          {
            firstName: answer.firstName,
            lastName: answer.lastName,
            roleId: roleId,
          },
          function (err) {
            if (err) throw err;
            console.log("Success! Employee added.");
            start();
          }
        )
      })
  })
}

// >>>>>>>>>>>>>>>>>>   VIEW   <<<<<<<<<<<<<<<<<<<<<<<<<< //

// view by department
function allDept() {
  connection.query("SELECT * FROM department", function (error, results) {
    if (error) throw error;
    console.table(results);
    start()
  });
}

// view by role
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

// view by employee
function allEmpl() {
  let qry = "SELECT "

  // aliases for employees
  qry += "E.id as EmployeeId, "
  qry += "E.firstName as EmployeeFirstName, "
  qry += "E.lastName as EmployeeLastName, "
  qry += "E.mgrId as ManagerId, "
  qry += "E.roleId, "

  // aliases for roles
  qry += "R.deptId, "
  qry += "R.title, "
  qry += "R.salary, "

  // alias for department
  qry += "D.deptName, "

  // aliases for managers
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

function exit() {
  console.log(">>>>>>>>>>   YOU  HAVE  EXITED  THE  APPLICATION  <<<<<<<<<<")
  connection.end()
}