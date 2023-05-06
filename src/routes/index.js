const homeRouter = require("./home");
const recruitRouter = require("./recruit");
const designRouter = require("./design")
const express = require("express");
const path = require("path");
function route(app) {
	app.use("/", homeRouter);
	app.use("/recruiter", recruitRouter);
	app.use("/designer", designRouter)
}

module.exports = route;
