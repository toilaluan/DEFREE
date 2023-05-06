const express = require("express");
const router = express.Router();
const recruitController = require("../app/controllers/RecruitController");

router.get("/upload-job", recruitController.index);
router.post("/save-job", recruitController.save_job);
module.exports = router;
