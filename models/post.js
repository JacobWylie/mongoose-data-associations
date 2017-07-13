const mongoose = require('mongoose');

//POST schema - title, content
const postSchema = new mongoose.Schema({
	title: String,
	content: String
});

module.exports = mongoose.model('Post', postSchema);