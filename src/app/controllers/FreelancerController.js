const mongoose = require("mongoose");
const User = require("../models/User")
class FreelancerController{
    index(req, res,next) {
		User.find({})
            .then(users => res.render('freelancer',{
            users,
            css:'freelancer.css'
            }))
            .catch(next);
	}

        
        
}
module.exports = new FreelancerController();