const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  database: 'appointments',
  port: 5432,
});

client.connect();

module.exports = client;
