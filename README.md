# Appointments

Imitation of a Yelp's find table component. This component takes the date,
time, business, and the party size for your appointment and stores in a mysql
table. It also registers users in a separate table.

### Starting DB and Loading Fake Data

##### Terminal shortcuts:
  - npm run makeDB :: This writes the DB
  - npm run loadData  :: This calls the load data function
  - npm test :: Alternatively, this will load the mock data and run a suite of tests.

##### Description:
This project comes with fake data intended to simulate business details which
can be loaded into the project using the db/loadFake.js file. To initiate
the database and load the data, read below.

  - schema.sql should be run once to create db, tables and structures in mysql
  - loadFake.js should be run once to populate fake data in mysql
  - index.js connects the app to the database


##### General MYSQL:
To initiate the database, make sure mysql is downloaded on your computer. To
initiate the mysql server, type the following into the command line:

  - mysql.server.start;


To log into the server and see the databases and their respective tables, type:

  - mysql -u root;


This calls mysql and tells them that you are looking for data saved under the
'root' user name. If you were going to use a password, type it as follows:

  - mysql -u root -p ****** ;


To use the schema.sql file to create a database, run the following in the
command line:

  - mysql -u root < schema.sql;

Or:

  - mysql -u root -p ****** < schema.sql;

##### Loading Data
This is achieved by calling on node to execute the function in db/loadFake.js,
by typing:

  node db/loadFakeData.js

Or:

  npm run loadData;


### Starting the server and compiler

To run the server type the following into terminal:

  npm start


To run the compiler:

  npm run react


To review these scripts, or edit them, please check the package.json section
'scripts'.

### Tests

It's as simple as:

  npm test

If you're in writing tests, you can use the following command so your tests
run every time they are altered:

  npm run testing
