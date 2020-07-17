--  this info is inserted into each table as a column with the repected value by name (employee, role, department).
-- user will be able to search for employees by employee, role or department.
-- must use department, role, employee in that order for code to work

-- department info
INSERT INTO department (deptName)
VALUES ("Hub Operations"),
("Human Resources"),
("Feeders");

-- role info
INSERT INTO role (title, salary, deptId)
VALUES ("Manager", 100100.25, 1),
("Supervisor", 70500.50, 2),
("Handler", 25000.00, 3);

-- employee info
INSERT INTO employee (firstName, lastName, roleId, mgrId)
VALUES ("Robert", "Mason", 1, NULL),
("Jane", "Duet", 2, 1),
("Adam", "Bradley", 2, 1), 
("Mary", "Gander", 3, 2), 
("Zack", "Karl", 3, 2),
("Jillian", "Mullins", 3, 2),
("Lisa", "Dawn", 3, 2),
("Curtis", "Jeffery", 1, NULL),
("Steve", "Humperdink", 3, 2),
("Jon", "Doh", 2, 1);