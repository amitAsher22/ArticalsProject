const { Pool, Client } = require("pg");
const dotenv = require("dotenv");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "0523157737",
  port: 5432,
});

const query = `
CREATE TABLE articals (  
    title varchar[],
    description text
);
`;
client.query(query, (err, res) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("Table is successfully created");
  client.end();
});

client.connect();
