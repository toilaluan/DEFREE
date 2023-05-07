const mongoose = require("mongoose");
const User = require("../models/User")
class FreelancerController{
    index(req, res,next) {
		User.find({})
            .then(users =>{
              users = users.map((user)=>{
                const detaillink = "/profile?id=" + user._id;
                user = user.toObject();
                user.detaillink = detaillink;
                return user;
              })
              res.render('freelancer',{
                users,
                css:'freelancer.css'
                });
            })
            // .catch(next);
	}

        
        
}
module.exports = new FreelancerController();