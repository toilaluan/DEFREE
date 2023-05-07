const homeRouter = require("./home");
const loginRouter = require("./login");
const signupRouter = require("./signup");
const recruitRouter = require("./recruit");
const designRouter = require("./design");
const freelancerRouter = require("./freelancer");
const profileRouter = require("./profile");
const express = require("express");
const path = require("path");
function route(app) {
  app.use("/", homeRouter);
  app.use("/login", loginRouter);
  app.use("/signup", signupRouter);	
  app.use("/recruiter", recruitRouter);
	app.use("/designer", designRouter);
  app.use("/freelancer", freelancerRouter);
  app.use("/profile", profileRouter);
}

module.exports = route;
