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
VALUES ("Handler", 25000.00, 1),
("Supervisor", 70500.50, 2),
("Manager", 100100.25, 3);

-- employee info
INSERT INTO employee (firstName, lastName, roleId, mgrId)
VALUES ("Robert", "Mason", 3, NULL),
("Jane", "Duet", 2, 1),
("Adam", "Bradley", 2, 1), 
("Mary", "Handler", 1, 3), 
("Zack", "Karl", 1, 3),
("Jillian", "Mullins", 1, 3),
("Lisa", "Dawn", 1, 2),
("Curtis", "Jeffery", 1, 2),
("Steve", "Humperdink", 1, 2),
("Jon", "Doh", 1, 2);