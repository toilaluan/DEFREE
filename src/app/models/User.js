const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
	organization: String,
	username: String,
	password: String,
});

module.exports = mongoose.model("User", User);
