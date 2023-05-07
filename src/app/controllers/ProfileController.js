const User = require("../models/User");
const Job = require("../models/Job"); 

class ProfileController {
    index(req, res) {
        Job.find()
			.populate("user")
			.exec((err, jobs) => {
				if (!err) {
					jobs = jobs.map((job) => {
                            job = job.toObject();
                            job.exist = true;
                        
						return job;
					});
                    /// SAU Nay se cho chon Jobs nao dc hien
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
                    const query = req.query;
                   
                    if(query.id){
                        User.findById(query.id,(err,user_id)=>{
                            user_id = user_id.toObject();
                            res.render("profile2",{user : user_id, prj : job_row ,unloggin:  !req.session.loggedin, css: 'profile.css'});
                        })
                    }
                    else{
                        let user_id = req.session.user
                        user_id = user_id[0]
                        res.render("profile2",{user : user_id, prj : job_row ,unloggin:  !req.session.loggedin, css: 'profile.css'});
                    }
                    
				}
			});
        
    }
}

module.exports = new ProfileController();
