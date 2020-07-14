-- if a database is already named employeeDB, do not allow a rewrite
DROP DATABASE IF EXISTS employeeDB;

-- create this DB
CREATE DATABASE employeeDB;

-- use this DB name
USE employeeDB;

-- first table is employee with five columns id, fname, lname, role, mgrId.
CREATE TABLE employee (
  id INT AUTO_INCREMENT PRIMARY KEY,
  firstName VARCHAR(30) NULL,
  lastName VARCHAR(30) NULL,
  roleId INT NOT NULL,
  managerId INT NOT NULL
);

-- another table called role with four columns id, title, salary, deptId.
CREATE TABLE role (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NULL,
  salary DECIMAL NULL,
  deptId INT NOT NULL,
);

-- another table called department with two columns, id and dept name.
CREATE TABLE department (
  id INT AUTO_INCREMENT PRIMARY KEY,
  deptName VARCHAR(30) NULL,
);




-- https://www.mysqltutorial.org/mysql-null/#:~:text=In%20MySQL%2C%20a%20NULL%20value,each%20NULL%20value%20is%20unknown.