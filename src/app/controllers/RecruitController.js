const Job = require("../models/Job");
const mongoose = require("mongoose");
class RecruitController {
	index(req, res) {
		res.render("recruit/upload_job");
	}
	save_job(req, res) {
		const body = req.body;
		try {
			body.user = mongoose.Types.ObjectId(req.session.user._id);
		} catch {
			body.user = mongoose.Types.ObjectId("6455eb1a9907b42342169f69");
		}
		const job = new Job(req.body);
		job.save();
		res.redirect("/designer/show_job");
	}
}

module.exports = new RecruitController();
