DROP DATABASE IF EXISTS tracker_db;
CREATE database tracker_db;

USE tracker_db;

CREATE TABLE department
(
    id int NOT NULL
    AUTO_INCREMENT,
	name varchar
    (255) NOT NULL,
	PRIMARY KEY
    (id)
);

    CREATE table role
    (
        id int NOT NULL
        AUTO_INCREMENT,
    title varchar
        (30),
    salary decimal
        (10,4),
    department_id int not null,
	PRIMARY KEY
        (id)
);

        CREATE TABLE employee
        (
            id INT NOT NULL
            AUTO_INCREMENT,
    first_name VARCHAR
            (30),
    last_name VARCHAR
            (30),
    role_id INT,
    manager_id INT, 
    PRIMARY KEY
            (id)
    );