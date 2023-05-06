const express = require("express");
const router = express.Router();
const designController = require("../app/controllers/DesignerController");

router.get("/", designController.index);
router.get("/show_job", designController.show_job);
router.get("/read_job", designController.read_job)
module.exports = router;
