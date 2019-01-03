### Schema
DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
INSERT INTO burgers (burger_name) VALUES ('Cheeseburger');
INSERT INTO burgers (burger_name) VALUES ('Mini Burger');
INSERT INTO burgers (burger_name, devoured) VALUES ('Bacon Burger', true);
INSERT INTO burgers (burger_name, devoured) VALUES ('Avocado Burger', true);
INSERT INTO burgers (burger_name, devoured) VALUES ('Vegetarian Burger', true);
INSERT INTO burgers (burger_name) VALUES ('3 Sliders');
