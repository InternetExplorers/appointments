DROP DATABASE IF EXISTS appointments;

CREATE DATABASE appointments;

USE appointments;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(20),
  last_name VARCHAR(20),
  phone INT(10),
  email VARCHAR(20),
  PRIMARY KEY(id)
);

CREATE TABLE businesses (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100),
  address VARCHAR(50),
  city VARCHAR(50),
  state VARCHAR(3),
  zip VARCHAR(15),
  opens TIME,
  closes TIME,
  guest_max INT (3),
  PRIMARY KEY(id)
);

CREATE TABLE appointments_log (
  id INT NOT NULL AUTO_INCREMENT,
  cutomer_id INT(10),
  business_id INT(10),
  start_time DATETIME,
  guest_count INT(3),
  PRIMARY KEY(id),
  FOREIGN KEY(cutomer_id) REFERENCES users(id),
  FOREIGN KEY(business_id) REFERENCES businesses(id)
);
