const express = require("express");
const router = express.Router();
const freelancerController = require("../app/controllers/FreelancerController");

router.get("/", freelancerController.index);


module.exports = router;