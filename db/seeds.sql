INSERT INTO employee (id, firstName, lastName, roleEmpl, department)
VALUES ("vanilla", 2.50, 100);

INSERT INTO role (nameEmpl, roleEmpl, department)
VALUES ("chocolate", 3.10, 120);

INSERT INTO department (nameEmpl, roleEmpl, department)
VALUES ("strawberry", 3.25, 75);

SELECT count(*) FROM authors;
-- ### Alternative way to insert more than one row
-- INSERT INTO employee (nameEmpl, roleEmpl, department)
-- VALUES ("vanilla", 2.50, 100), ("chocolate", 3.10, 120), ("strawberry", 3.25, 75);



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
  