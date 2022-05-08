INSERT INTO departments (name)
VALUES 
  ('Sales'),
  ('Marketing'),
  ('Finance'),
  ('Human Resources');

INSERT INTO roles (title, salary, department_id)
VALUES
  ('Sales consultant', 25.28, 1),
  ('Sales representative', 27.07, 1),
  ('Sales manager', 30.12, 1),
  ('Marketing analyst', 32.15, 2),
  ('Marketing specialist', 34.16, 2),
  ('Marketing consultant', 29.16, 2),
  ('Account broker', 35.19, 3),
  ('Payroll clerk', 25.12, 3),
  ('Payroll manager', 34.15, 3),
  ('Budget analyst', 33.19, 3),
  ('Director of recruiting', 39.15, 4),
  ('Benefits manager', 33.17, 4),
  ('Recruiter', 25.19, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
  ('Natasha', 'Brofsky', 3, NULL),
  ('Dominyck', 'Schweyer', 2, 1),
  ('Bruk', 'Dinbaru', 1, 1),
  ('Kyle', 'Gaarder', 2, 1),
  ('Gavin', 'Richardson', 6, NULL),
  ('Alex', 'Cavanaugh', 5, NULL),
  ('Natalie', 'Cherepanksy', 4, NULL),
  ('Sarah', 'Ritter', 9, NULL),
  ('Claire', 'DuBois', 8, 8),
  ('Ryan', 'Edwards', 7, 8),
  ('Ahmed', 'Ashour', 10, 8),
  ('Esteban', 'Gonzalez', 11, NULL),
  ('Patricia', 'Wnek', 12, 12),
  ('Kyoungmin', 'Park', 13, 12);