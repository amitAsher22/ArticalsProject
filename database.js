// connect your Express.js application to a Postgres database
/// conect postgrase - pg
// install dotenv
// Use .env

/// For Example - create with quary
// table - usertable
//columns (2) - name and email
/// ***example

const pg = require("pg");
const dotenv = require("dotenv");
dotenv.config();

const config = {
  host: process.env.host,
  password: process.env.password,
  user: process.env.user,
  database: process.env.db_name,
  port: process.env.db_port,
};

const client = new pg.Client(config);
client.connect((err, res) => {
  if (!err) {
    console.log(" connected Postgrse");
  } else {
    console.log("failed to connect with Postgrase database");
  }
});

module.exports = client;
