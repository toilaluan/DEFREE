const { Double } = require("bson");
const mongoose = require("mongoose");
const { float } = require("webidl-conversions");
const Schema = mongoose.Schema;

const User = new Schema({
	organization: String,
	username: String,
	password: String,
	kinang: String,
	cacduan: String,
	Soluongfollow: Number,
	email: String,
	phonenumber: String,
});

module.exports = mongoose.model("User", User);
