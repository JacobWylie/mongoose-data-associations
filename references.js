const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog_demo_2', {useMongoClient: true});


//POST schema - title, content
const postSchema = new mongoose.Schema({
	title: String,
	content: String
});
// Turns into a model
const Post = mongoose.model('Post', postSchema);

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
const User = mongoose.model('User', userSchema);


// User.create({
// 	email: 'bob@gmail.com',
// 	name: 'Bob Belcher'
// })


// Post.create({
// 	title: 'How do make cereal',
// 	content: "gibberish"
// }, (err, post) => {
// 	User.findOne({email:'bob@gmail.com'}, (err, foundUser) => {
// 		if(err) {
// 			console.log(err)
// 		} else {
// 			foundUser.posts.push(post);
// 			foundUser.save((err, data) => {
// 				if(err) {
// 					console.log(err)
// 				} else {
// 					console.log(data)
// 				}
// 			})
// 		}
// 	})
// })

// Find User
// Find all posts for that user

User.findOne({email: 'bob@gmail.com'}).populate('posts').exec((err, user) => {
	if(err) {
		console.log(err);
	} else {
		console.log(user);
	}
})

















