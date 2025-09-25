import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import BigButton from '../../components/BigButton';
import { PostsContext } from '../../context/PostsContext';
import './NewPostPage.css';
import { useState } from 'react';

function NewPostPage() {
	const navigate = useNavigate();
	const { addPost } = useContext(PostsContext); // this is where context has sent the WHOLE setPosts package to this page!

	// states only in this file for the form the user is gonna fill out in the article, to create a new post.
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	// when i fix my backend -- save the post in backend and return that to the homepage so that the newest post will be shown there!
	// now we navigate --> together with the backend logic, it will be there after we change page to homepage!
	const handlePost = () => {
		if (!title || !content) {
			alert('All the fields needs to me filled out!');
			return;
		}

		const newPost = {
			username: 'CurrentUser', // LOOOOOOOOOOOOOOOOOOOKK ------> --> --> REPLACE THIS WHEN I HAVE FIXED LOGIN/AUTH ETC... <-- <-- <--
			title,
			content,
		};

		addPost((prev) => [newPost, ...prev]); //addPost is the same as setPost on HomePage (addPosts is just a prop name to send it here BUT it IS still setPosts from HomePage)
		// "prev" is the previous array from home -- we put THIS "newPost" ON TOP of that (now) old array from HomePage using (...prev)
		// this makes a whole new array, combining the old posts with the newest one from this file on top!

		navigate('/'); // after a new post is posted we navigate back to HomePage to see it automatically!
	};

	return (
		<section className="post-section">
			<article className="post-section__content">
				<h2 className="post-section__title">CREATE A POST</h2>

				<label className="post-section__label--title" htmlFor="title">
					Title:
				</label>
				<input
					className="post-section__input"
					type="text"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>

				<label
					className="post-section__label--content"
					htmlFor="content">
					Content:
				</label>
				<textarea
					className="post-section__txt-area"
					value={content}
					onChange={(e) => setContent(e.target.value)}
					placeholder="Share something with the world!"
				/>
			</article>

			<BigButton text="POST" onClick={handlePost} />
			{/* clicking button activates the handlePost function up there ^ */}
		</section>
	);
}

export default NewPostPage;
