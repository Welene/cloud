import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import BigButton from '../../components/BigButton';
import { PostsContext } from '../../context/PostsContext';
import './NewPostPage.css';
import { useState } from 'react';
import { createNewPost } from '../../functions/newPost';

function NewPostPage() {
	const navigate = useNavigate();
	const { setPosts } = useContext(PostsContext); // this is where context has sent the WHOLE setPosts package to this page!

	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	const handlePost = async () => {
		if (!title || !content) {
			alert('All the fields needs to me filled out!');
			return;
		}

		try {
			const result = await createNewPost(title, content);

			const token = localStorage.getItem('token');
			let username = 'UnknownUser';
			let userId = 'userId';
			if (token) {
				const payload = JSON.parse(atob(token.split('.')[1]));
				username = payload.username;
			}

			const now = new Date();
			const createdAt = `${now.getFullYear()}-${String(
				now.getMonth() + 1
			).padStart(2, '0')}-${String(now.getDate()).padStart(
				2,
				'0'
			)} ${String(now.getHours()).padStart(2, '0')}:${String(
				now.getMinutes()
			).padStart(2, '0')}`;

			const newPost = {
				postId: result.postId,
				username,
				userId,
				title,
				content,
				createdAt,
			};

			setPosts((prev) => [newPost, ...prev]); // add new post to top of existing posts
			navigate('/'); // navigate back to homepage
		} catch (error) {
			console.error(error);
			alert(error.response?.data?.message || error.message);
		}
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
