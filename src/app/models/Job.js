const { Int32 } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Job = new Schema({
	user: {
		type: mongoose.Types.ObjectId,
		ref: "User"
	},
	job_type: {
		type: String,
		required: true,
	},
	jd: String,
	required_skill: String,
	deadline: {
		type: String,
		required: true,
	},
	wage: {
		type: Number,
		default: 0,
	},
	method_pay_wage: String,
	created_at: {
		type: Date,
		default: Date(),
	},
    application: [{type: mongoose.Types.ObjectId}]
});

module.exports = mongoose.model("Job", Job);
