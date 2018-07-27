# appointments

Imitation of a Yelp's find table component. This component takes the date the,
time, and the part size for your appointment and stores in a mysql database.

Table of Contents:
 --Starting database and loading fake data
 --Starting the server and compiler
 --Testing

#Starting DB and Loading Fake Data

Terminal shortcuts:
  npm run makeDB--- this writes the DB
  npm run loadData--- this calls the load data function

More detailed:
This project comes with fake data intended to simulate business details which
can be loaded into the project using the db/loadFake.js file. To initiate
the database and load the data, read below.

  -- schema.sql should be run once to create db, tables and structures in mysql
  -- loadFake.js should be run once to populate fake data in mysql
  -- index.js connects the app to the database


GENERAL MYSQL INFO:
To initiate the database, make sure mysql is downloaded on your computer. To
initiate the mysql server, type the following into the command line:

  mysql.server.start;


To log into the server and see the databases and their respective tables, type:

  mysql -u root;


This calls mysql and tells them that you are looking for data saved under the
'root' user name. If you were going to use a password, type it as follows:

  mysql -u root -p ****** ;


To use the schema.sql file to create a database, run the following in the
command line:

  mysql -u root < schema.sql;

Or:

  mysql -u root -p ****** < schema.sql;

LOADING DATA
This is achieved by calling on node to execute the function in db/loadFake.js,
by typing:

  node db/loadFakeData.js

Or:

  npm run loadData;


#Starting the server and compiler

To run the server type the following into terminal:

  npm start


To run the compiler:

  npm run react


To review these scripts, or edit them, please check the package.json section
'scripts'.  
