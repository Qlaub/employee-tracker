INSERT INTO departments (name)
VALUES 
  ('Sales'),
  ('Marketing'),
  ('Finance'),
  ('Human Resources');

INSERT INTO roles (title, salary, department_id)
VALUES
  ('Sales consultant', 100000, 1),
  ('Sales representative', 110000, 1),
  ('Sales manager', 120000, 1),
  ('Marketing analyst', 135000, 2),
  ('Marketing specialist', 136000, 2),
  ('Marketing consultant', 140000, 2),
  ('Account broker', 115000, 3),
  ('Payroll clerk', 120000, 3),
  ('Payroll manager', 140000, 3),
  ('Budget analyst', 132000, 3),
  ('Director of recruiting', 145000, 4),
  ('Benefits manager', 132000, 4),
  ('Recruiter', 99000, 4);

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