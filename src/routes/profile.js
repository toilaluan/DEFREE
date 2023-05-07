const express = require("express");
const router = express.Router();
const profileController = require("../app/controllers/ProfileController");
const authMiddleware = require("../middlewares/auth.middlewares");

router.use("/",  profileController.index); //authMiddleware.loggedin,

module.exports = router;
