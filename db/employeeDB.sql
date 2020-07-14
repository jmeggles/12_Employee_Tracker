-- if a database is already named employeeDB, do not allow a rewrite
DROP DATABASE IF EXISTS employeeDB;

-- create this DB
CREATE DATABASE employeeDB;

-- use this DB name
USE employeeDB;

-- first table is employee with five columns id, fname, lname, role, mgrId.
-- auto-increment automatically generates sequential numeric values every time that a record is inserted into a table.
-- null means unknown these columns can acceept unknown values while not null cannot accept unknown values and must have an input.
CREATE TABLE employee (
  id INT AUTO_INCREMENT PRIMARY KEY,
  firstName VARCHAR(30) NULL,
  lastName VARCHAR(30) NULL,
  roleId INT NOT NULL,
  mgrId INT NOT NULL
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

* **department**:

  * **id** - INT PRIMARY KEY
  * **name** - VARCHAR(30) to hold department name

* **role**:

  * **id** - INT PRIMARY KEY
  * **title** -  VARCHAR(30) to hold role title
  * **salary** -  DECIMAL to hold role salary
  * **department_id** -  INT to hold reference to department role belongs to

* **employee**:

  * **id** - INT PRIMARY KEY
  * **first_name** - VARCHAR(30) to hold employee first name
  * **last_name** - VARCHAR(30) to hold employee last name
  * **role_id** - INT to hold reference to role employee has
  * **manager_id** - INT to hold reference to another employee that manager of the current employee. This field may be null if the employee has no manager
  