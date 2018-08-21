const { Client } = require('pg');

const client = new Client({
  host: 'ec2-18-221-230-73.us-east-2.compute.amazonaws.com',
  database: 'appointments',
  user: 'power_user',
  password: '$poweruserpassword',
  port: 5432,
});

client.connect();

module.exports = client;
