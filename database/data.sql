insert into users
  ("firstName", "lastName", "password", "email")
  values
    ('Jim', 'Bob', 'asdf', 'jim@example.com'),
    ('Anna', 'Smith', 'asdf', 'anna@example.com');

insert into todos
  ("name", "details", "userId")
  values
    ('Go to store', 'Get milk, bread, eggs, and Diet Coke', 1),
    ('Wash cars', 'Wash both cars inside and out!', 1),
    ('Clean bathrooms', 'Clean all the bathrooms in the house', 1);
