DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  phone VARCHAR(20),
  email VARCHAR(50)
);

DROP TABLE IF EXISTS businesses CASCADE;
CREATE TABLE businesses (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  address VARCHAR(50),
  city VARCHAR(50),
  state VARCHAR(3),
  zip VARCHAR(15),
  phone VARCHAR(50),
  opens TIME,
  closes TIME,
  guest_max INT
);

DROP TABLE IF EXISTS appointments_log CASCADE;
CREATE TABLE appointments_log (
  id SERIAL PRIMARY KEY,
  business_id INT,
  customer_id INT,
  start_time VARCHAR(20),
  date_string VARCHAR(20),
  guest_count INT
);

COPY businesses (name,address,city,state,zip,phone,opens,closes,guest_max) FROM '/Users/zcoursey22/Documents/Hack Reactor/SDC/appointments/data/businesses/businesses1.csv' DELIMITER ',';
COPY businesses (name,address,city,state,zip,phone,opens,closes,guest_max) FROM '/Users/zcoursey22/Documents/Hack Reactor/SDC/appointments/data/businesses/businesses2.csv' DELIMITER ',';
COPY businesses (name,address,city,state,zip,phone,opens,closes,guest_max) FROM '/Users/zcoursey22/Documents/Hack Reactor/SDC/appointments/data/businesses/businesses3.csv' DELIMITER ',';
COPY businesses (name,address,city,state,zip,phone,opens,closes,guest_max) FROM '/Users/zcoursey22/Documents/Hack Reactor/SDC/appointments/data/businesses/businesses4.csv' DELIMITER ',';
COPY businesses (name,address,city,state,zip,phone,opens,closes,guest_max) FROM '/Users/zcoursey22/Documents/Hack Reactor/SDC/appointments/data/businesses/businesses5.csv' DELIMITER ',';
COPY businesses (name,address,city,state,zip,phone,opens,closes,guest_max) FROM '/Users/zcoursey22/Documents/Hack Reactor/SDC/appointments/data/businesses/businesses6.csv' DELIMITER ',';
COPY businesses (name,address,city,state,zip,phone,opens,closes,guest_max) FROM '/Users/zcoursey22/Documents/Hack Reactor/SDC/appointments/data/businesses/businesses7.csv' DELIMITER ',';
COPY businesses (name,address,city,state,zip,phone,opens,closes,guest_max) FROM '/Users/zcoursey22/Documents/Hack Reactor/SDC/appointments/data/businesses/businesses8.csv' DELIMITER ',';
COPY businesses (name,address,city,state,zip,phone,opens,closes,guest_max) FROM '/Users/zcoursey22/Documents/Hack Reactor/SDC/appointments/data/businesses/businesses9.csv' DELIMITER ',';
COPY businesses (name,address,city,state,zip,phone,opens,closes,guest_max) FROM '/Users/zcoursey22/Documents/Hack Reactor/SDC/appointments/data/businesses/businesses10.csv' DELIMITER ',';
COPY users (first_name,last_name,phone,email) FROM '/Users/zcoursey22/Documents/Hack Reactor/SDC/appointments/data/users/users1.csv' DELIMITER ',';
COPY users (first_name,last_name,phone,email) FROM '/Users/zcoursey22/Documents/Hack Reactor/SDC/appointments/data/users/users2.csv' DELIMITER ',';
COPY users (first_name,last_name,phone,email) FROM '/Users/zcoursey22/Documents/Hack Reactor/SDC/appointments/data/users/users3.csv' DELIMITER ',';
COPY users (first_name,last_name,phone,email) FROM '/Users/zcoursey22/Documents/Hack Reactor/SDC/appointments/data/users/users4.csv' DELIMITER ',';
COPY users (first_name,last_name,phone,email) FROM '/Users/zcoursey22/Documents/Hack Reactor/SDC/appointments/data/users/users5.csv' DELIMITER ',';
COPY users (first_name,last_name,phone,email) FROM '/Users/zcoursey22/Documents/Hack Reactor/SDC/appointments/data/users/users6.csv' DELIMITER ',';
COPY users (first_name,last_name,phone,email) FROM '/Users/zcoursey22/Documents/Hack Reactor/SDC/appointments/data/users/users7.csv' DELIMITER ',';
COPY users (first_name,last_name,phone,email) FROM '/Users/zcoursey22/Documents/Hack Reactor/SDC/appointments/data/users/users8.csv' DELIMITER ',';
COPY users (first_name,last_name,phone,email) FROM '/Users/zcoursey22/Documents/Hack Reactor/SDC/appointments/data/users/users9.csv' DELIMITER ',';
COPY users (first_name,last_name,phone,email) FROM '/Users/zcoursey22/Documents/Hack Reactor/SDC/appointments/data/users/users10.csv' DELIMITER ',';
COPY appointments_log (business_id,customer_id,start_time,date_string,guest_count) FROM '/Users/zcoursey22/Documents/Hack Reactor/SDC/appointments/data/appointments/appointments1.csv' DELIMITER ',';
COPY appointments_log (business_id,customer_id,start_time,date_string,guest_count) FROM '/Users/zcoursey22/Documents/Hack Reactor/SDC/appointments/data/appointments/appointments2.csv' DELIMITER ',';
COPY appointments_log (business_id,customer_id,start_time,date_string,guest_count) FROM '/Users/zcoursey22/Documents/Hack Reactor/SDC/appointments/data/appointments/appointments3.csv' DELIMITER ',';
COPY appointments_log (business_id,customer_id,start_time,date_string,guest_count) FROM '/Users/zcoursey22/Documents/Hack Reactor/SDC/appointments/data/appointments/appointments4.csv' DELIMITER ',';
COPY appointments_log (business_id,customer_id,start_time,date_string,guest_count) FROM '/Users/zcoursey22/Documents/Hack Reactor/SDC/appointments/data/appointments/appointments5.csv' DELIMITER ',';
COPY appointments_log (business_id,customer_id,start_time,date_string,guest_count) FROM '/Users/zcoursey22/Documents/Hack Reactor/SDC/appointments/data/appointments/appointments6.csv' DELIMITER ',';
COPY appointments_log (business_id,customer_id,start_time,date_string,guest_count) FROM '/Users/zcoursey22/Documents/Hack Reactor/SDC/appointments/data/appointments/appointments7.csv' DELIMITER ',';
COPY appointments_log (business_id,customer_id,start_time,date_string,guest_count) FROM '/Users/zcoursey22/Documents/Hack Reactor/SDC/appointments/data/appointments/appointments8.csv' DELIMITER ',';
COPY appointments_log (business_id,customer_id,start_time,date_string,guest_count) FROM '/Users/zcoursey22/Documents/Hack Reactor/SDC/appointments/data/appointments/appointments9.csv' DELIMITER ',';
COPY appointments_log (business_id,customer_id,start_time,date_string,guest_count) FROM '/Users/zcoursey22/Documents/Hack Reactor/SDC/appointments/data/appointments/appointments10.csv' DELIMITER ',';

ALTER TABLE appointments_log ADD FOREIGN KEY (business_id) REFERENCES businesses(id);
ALTER TABLE appointments_log ADD FOREIGN KEY (customer_id) REFERENCES users(id);

CREATE INDEX appointments_business_id ON appointments_log(business_id);
CREATE INDEX appointments_customer_id ON appointments_log(customer_id);
