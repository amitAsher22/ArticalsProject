const app = () => {
  const express = require("express");
  let dotenv = require("dotenv");
  const app = express();
  dotenv.config();
};

module.exports = { app };
