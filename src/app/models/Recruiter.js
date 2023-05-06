const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Recruiter = new Schema({
	organization: String,
});

module.exports = mongoose.model("Recruiter", Recruiter);
