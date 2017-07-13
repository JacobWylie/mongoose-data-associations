const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog_demo_2', {useMongoClient: true});
const Post = require('./models/post');
const User = require('./models/user');

// User.create({
// 	email: 'bob@gmail.com',
// 	name: 'Bob Belcher'
// })

// Post.create({
// 	title: 'How do make cereal part 2',
// 	content: "yo yo yo "
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

















