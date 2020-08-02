INSERT INTO department
    (name)
values
    ('Construction'),
    ('music'),
    ('web-devolepment');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('manager', 100.50, 1),
    ('labor', 65.00, 1),
    ('teacher', 50.00, 2),
    ('developer', 50.00, 3);

INSERT INTO  employee
    (
    first_name, last_name, role_id, manager_id
    )
VALUES
    ('Ian', 'Martinez', 1, NULL),
    ('Bob', 'Smith', 2, 1),
    ('Edd', 'Daniels', 4, 1);
    