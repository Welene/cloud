import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BigButton from '../../components/BigButton';
import { PostsContext } from '../../context/PostsContext';
import { editPost } from '../../functions/editPost';
// import './EditPost.css';

function EditPostPage() {
	const navigate = useNavigate();
	const { postId } = useParams();
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const { posts } = useContext(PostsContext);

	useEffect(() => {
		const post = posts.find((p) => p.postId === postId);
		if (post) {
			setTitle(post.title);
			setContent(post.content);
		}
	}, [postId, posts]);

	const handleUpdatePost = async () => {
		await editPost(postId, { title, content });
		navigate('/');
	};

	return (
		<section className="post-section">
			<article className="post-section__content">
				<h2 className="post-section__title">EDIT POST</h2>

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
					placeholder="Simple spelling error or instant regret? - fix it here!"
				/>
			</article>

			<BigButton text="EDIT" onClick={handleUpdatePost} />
			{/* clicking button activates the handlePost function up there ^ */}
		</section>
	);
}

export default EditPostPage;
