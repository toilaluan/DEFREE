const User = require("../models/User");
const Doc = require("../models/Doc");
const Job = require("../models/Job"); 

class ProfileController {
    index(req, res) {
        Job.find()
			.populate("user")
			.exec((err, jobs) => {
				if (!err) {
					jobs = jobs.map((job) => {
                            // const detail_link = "/designer/read_job?id=" + job._id;
                            job = job.toObject();
                            job.exist = true;
                            // job.created_at = job.created_at.toDateString();
                            // job.detail_link = detail_link;
						return job;
					});
                    let job_row =[];
                    for (let i = 0; i < 2; i++) {
                        let job_column =[];
                        for(let j = 0;j <3;j ++){
                            if(3*i+j <= jobs.length){
                                job_column[j] = jobs[3*i+j];
                            }
                            else {
                                let job = {exists: false};
                                job_column[j] = job;
                            }
                        }
                        job_row[i] = job_column
                    }
                    
					res.render("profile2",{prj : job_row ,unloggin:  !req.session.loggedin, css: 'profile.css'});
				}
			});
        
    }
}

module.exports = new ProfileController();
