DROP DATABASE IF EXISTS employeeDB;

CREATE DATABASE employeeDB;

USE employeeDB;

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  nameEmpl VARCHAR(45) NULL,
  roleEmpl DECIMAL(10,2) NULL,
  department INT NULL,
  PRIMARY KEY (id)
);

