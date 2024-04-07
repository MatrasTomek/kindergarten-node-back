const mongoose = require("mongoose");
const { Schema } = mongoose;

const newsPhotoSchema = new Schema({
	title: { type: String, required: true },
	content1: { type: String },
	content2: { type: String },
	signature: { type: String, required: true },
	date: { type: String, required: true },
	photoFn: { type: String },
});

module.exports = mongoose.model("NewsPhoto", newsPhotoSchema);
