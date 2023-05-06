const homeRouter = require("./home");
const express = require("express");
const path = require("path");
function route(app) {
  app.use("/", homeRouter);
}

module.exports = route;
