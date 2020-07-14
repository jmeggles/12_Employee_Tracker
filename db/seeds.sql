--  this info is inserted into each table as a column with the repected value by name (employee, role, department).

INSERT INTO employee (id, firstName, lastName, roleId, mgrId)
VALUES (123, "John", "Doe", 1446337, 0221453);

INSERT INTO role (id, title, salary, deptId)
VALUES (0221453, "Supervisor", 90159.25, 5);

INSERT INTO department (id, deptName)
VALUES (5, "Operations");

-- select returns the values
SELECT count(*) FROM employee;





-- ----------------------------------- --
-- --------- notes ------------------
-- ### Alternative way to insert more than one row
-- INSERT INTO employee (nameEmpl, roleEmpl, department)
-- VALUES ("vanilla", 2.50, 100), ("chocolate", 3.10, 120), ("strawberry", 3.25, 75);



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
  