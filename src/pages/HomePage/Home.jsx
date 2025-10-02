import { ForumWrapper } from '../../components/ForumWrapper/ForumWrapper';
import './Home.css';
import { PostsContext } from '../../context/PostsContext';
import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { deletePost } from '../../functions/deletePost';

function Home() {
	const { posts, setPosts } = useContext(PostsContext);
	const API_URL = import.meta.env.VITE_API_URL;

	useEffect(() => {
		axios
			.get(`${API_URL}/posts`)
			.then((res) => setPosts(res.data.posts || []))
			.catch((err) => console.error('Cannot fetch posts', err));
	}, []);

	const handleDelete = async (postId) => {
		try {
			await deletePost(postId);
			setPosts((prevPosts) =>
				prevPosts.filter((p) => p.postId !== postId)
			);
		} catch (err) {
			console.error('Failed to delete post', err);
		}
	};

	return (
		<ForumWrapper posts={posts} onDelete={handleDelete} className="home" />
	);
}

export default Home;
