DROP DATABASE IF EXISTS appointments;

CREATE DATABASE appointments;

USE appointments;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  phone VARCHAR(20),
  email VARCHAR(50) UNIQUE,
  PRIMARY KEY(id)
);

CREATE TABLE businesses (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100),
  address VARCHAR(50),
  city VARCHAR(50),
  state VARCHAR(3),
  zip VARCHAR(15),
  phone VARCHAR(50),
  opens TIME,
  closes TIME,
  guest_max INT (3),
  PRIMARY KEY(id)
);

CREATE TABLE appointments_log (
  id INT NOT NULL AUTO_INCREMENT,
  business_id INT(10),
  customer_id INT(10),
  start_time VARCHAR(20),
  date_string VARCHAR(20),
  guest_count INT(3),
  PRIMARY KEY(id),
  FOREIGN KEY(business_id) REFERENCES businesses(id),
  FOREIGN KEY(customer_id) REFERENCES users(id)
);
