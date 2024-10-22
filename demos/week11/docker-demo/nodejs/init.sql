CREATE TABLE animals (
  id SERIAL PRIMARY KEY,
  species VARCHAR(50),
  name VARCHAR(50)
);

INSERT INTO animals (species, name) VALUES ('cat', 'meow-face');
INSERT INTO animals (species, name) VALUES ('dog', 'woof-face');