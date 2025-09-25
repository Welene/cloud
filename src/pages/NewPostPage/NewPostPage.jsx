import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import BigButton from '../../components/BigButton';
import { PostsContext } from '../../context/PostsContext';

function NewPostPage() {
	const navigate = useNavigate();
	const { addPost } = useContext(PostsContext); // this is where context has sent the WHOLE setPosts package to this page!

	// when i fix my backend -- save the post in backend and return that to the homepage so that the newest post will be shown there!
	// now we navigate --> together with the backend logic, it will be there after we change page to homepage!
	const handlePost = () => {
		const newPost = {
			username: 'CurrentUser',
			title: 'My New Post',
			content: 'This is a new post!',
		};

		addPost((prev) => [newPost, ...prev]); //addPost is the same as setPost on HomePage (addPosts is just a prop name to send it here BUT it IS still setPosts from HomePage)
		// "prev" is the previous array from home -- we put THIS "newPost" ON TOP of that (now) old array from HomePage using (...prev)
		// this makes a whole new array, combining the old posts with the newest one from this file on top!

		navigate('/'); // after a new post is posted we navigate back to HomePage to see it automatically!
	};

	return (
		<div>
			<BigButton text="Submit Post" onClick={handlePost} />
			{/* clicking button activates the handlePost function up there ^ */}
		</div>
	);
}

export default NewPostPage;
