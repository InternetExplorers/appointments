THIS DIRECTORY:
  -- schema.sql should be run once to create db, tables and structures in mysql
  -- loadFake.js should be run once to populate fake data in mysql
  -- index.js connects the app to the database
  -- dbHelpers.js contains functions that will be used on the database


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
