--  this info is inserted into each table as a column with the repected value by name (employee, role, department).
-- user will be able to search for employees by employee, role or department.

-- employee info
INSERT INTO employee (id, firstName, lastName, roleId, mgrId)
VALUES (1, "John", "Doe", 52, NULL);

INSERT INTO employee (id, firstName, lastName, roleId, mgrId)
VALUES (2, "Jane", "Duet", 51, 52);

INSERT INTO employee (id, firstName, lastName, roleId, mgrId)
VALUES (3, "Adam", "Bradley", 52, NULL);

INSERT INTO employee (id, firstName, lastName, roleId, mgrId)
VALUES (4, "Mary", "Handler", 50, 51);

INSERT INTO employee (id, firstName, lastName, roleId, mgrId)
VALUES (5, "Zack", "Karl", 50, 51);

INSERT INTO employee (id, firstName, lastName, roleId, mgrId)
VALUES (6, "John", "Doe", 51, 52);

INSERT INTO employee (id, firstName, lastName, roleId, mgrId)
VALUES (7, "Jane", "Duet", 50, 51);

INSERT INTO employee (id, firstName, lastName, roleId, mgrId)
VALUES (8, "Adam", "Bradley", 50, 51);

INSERT INTO employee (id, firstName, lastName, roleId, mgrId)
VALUES (9, "Mary", "Handler", 50, 51);

INSERT INTO employee (id, firstName, lastName, roleId, mgrId)
VALUES (10, "Zack", "Karl", 50, 52);


-- role info
INSERT INTO role (id, title, salary, deptId)
VALUES (50, "Handler", 25000.00, 20);

INSERT INTO role (id, title, salary, deptId)
VALUES (51, "Supervisor", 80500.50, 21);

INSERT INTO role (id, title, salary, deptId)
VALUES (52, "Manager", 100100.25, 22);




-- department info
INSERT INTO department (id, deptName)
VALUES (20, "Hub Operations");

INSERT INTO department (id, deptName)
VALUES (21, "Human Resources");

INSERT INTO department (id, deptName)
VALUES (22, "Feeders");



-- -- select returns the values
-- SELECT count(*) FROM employee;
-- SELECT firstName from employee




-- * **department**:

--   * **id** - INT PRIMARY KEY
--   * **name** - VARCHAR(30) to hold department name

-- * **role**:

--   * **id** - INT PRIMARY KEY
--   * **title** -  VARCHAR(30) to hold role title
--   * **salary** -  DECIMAL to hold role salary
--   * **department_id** -  INT to hold reference to department role belongs to

-- * **employee**:

--   * **id** - INT PRIMARY KEY
--   * **first_name** - VARCHAR(30) to hold employee first name
--   * **last_name** - VARCHAR(30) to hold employee last name
--   * **role_id** - INT to hold reference to role employee has
--   * **manager_id** - INT to hold reference to another employee that manager of the current employee. This field may be null if the employee has no manager
  