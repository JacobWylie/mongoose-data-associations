const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog_demo', {useMongoClient: true});



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
	posts: [postSchema]
});
// Turns into a model
const User = mongoose.model('User', userSchema);


// Test user
const newUser = new User({
	email: 'dan@green.edu',
	name: 'Dan Green'
})

// newUser.posts.push({
// 	title: 'How to brew beer',
// 	content: 'Its hard'
// })

// newUser.save( (err, user) => {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log(user);
// 	}
// })


// Test post
// const newPost = new Post({
// 	title: "Reflections on Apples",
// 	content: 'They are delicious'
// })

// newPost.save((err, post) => {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log(post)
// 	}
// })

// User.findOne({name: 'Dan Green'}, (err, user) => {
// 	if(err) {
// 		console.log(err)
// 	} else {
// 		user.posts.push({
// 			title: '3 things i hate',
// 			content: "everything 3 times"
// 		})
// 		user.save( (err, user) => {
// 			if(err) {
// 				console.log(err)
// 			} else {
// 				console.log(user)
// 			}
// 		})
// 	}
// })




















