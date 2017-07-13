const mongoose = require('mongoose');

// USER schema - email, name
const userSchema = new mongoose.Schema({
	email: String,
	name: String,
	posts: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Post'
		}
	]
});
// Turns into a model
module.exports = mongoose.model('User', userSchema);