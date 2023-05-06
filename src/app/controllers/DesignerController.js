const mongoose = require("mongoose");
const Job = require("../models/Job");
const User = require("../models/User")
class DesignController {
	index(req, res) {
		res.json({ result: "success" });
	}
	show_job(req, res) {
		Job.find()
			.populate("user")
			.exec((err, jobs) => {
				if (!err) {
					jobs = jobs.map((job) => {
						const detail_link = "/designer/read_job?id=" + job._id;
						job = job.toObject();
						job.created_at = job.created_at.toDateString();
						job.detail_link = detail_link;
						return job;
					});
					res.render("designer/show_job", { jobs, unloggin: !req.session.loggedin });
				}
			});
	}
    read_job(req, res){
        const query = req.query
        Job.findById(query.id, (err, job) => {
            job = job.toObject()
            res.render("designer/read_job", {content: job.jd, unloggin: !req.session.loggedin})
        })
    }
}

module.exports = new DesignController();
