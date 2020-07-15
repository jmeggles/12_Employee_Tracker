-- erases and rewrites database when new info below is added (no needd to delete and open new DB).
DROP DATABASE IF EXISTS employeeDB;

-- creates the DB.
CREATE DATABASE employeeDB;

-- assigned DB name.
USE employeeDB;

-- first table is employee with five columns id, fname, lname, role, mgrId.
-- auto-increment automatically generates sequential numeric values every time that a record is inserted into a table.
-- null means unknown these columns can acceept unknown values while not null cannot accept unknown values and must have an input.
CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  firstName VARCHAR(30) NOT NULL,
  lastName VARCHAR (30) NOT NULL,
  roleId INT NOT NULL,
  mgrId VARCHAR(30) NULL,
  PRIMARY KEY (id)
);

-- another table called role with four columns id, title, salary, deptId.
CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NULL,
  salary DECIMAL(10,2) NULL,
  deptId INT NULL,
  PRIMARY KEY (id)
);

-- another table called department with two columns, id and dept name.
CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  deptName VARCHAR(30) NULL,
  PRIMARY KEY (id)
);