// create package.json - npm init
// Use expressJS
// Use dotenv
// use async await
// use nodemon
// npm run start - connect to database
// const app = require("./Middleware/Middleware.js");
const express = require("express");
let dotenv = require("dotenv");
const app = express();
dotenv.config();
// Local Modules
const myRoute = require("./routes/myRouter");
const port = process.env.port || 3000;

app.use("/", myRoute);

// server listen port 4000/3000
app.listen(port, () => {
  console.log("server is listening port:", port);
});
