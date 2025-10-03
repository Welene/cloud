import { ForumWrapper } from '../../components/ForumWrapper/ForumWrapper';
import './Home.css';
import { PostsContext } from '../../context/PostsContext';
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { deletePost } from '../../functions/deletePost';
import PostSorter from '../../components/PostOrder/PostOrder';

function Home() {
	const { posts, setPosts } = useContext(PostsContext);
	const API_URL = import.meta.env.VITE_API_URL;
	const [sortOrder, setSortOrder] = useState('descending');

	useEffect(() => {
		axios
			.get(`${API_URL}/posts`)
			.then((res) => setPosts(res.data.posts || []))
			.catch((err) => console.error('Cannot fetch posts', err));
	}, []);

	const handleDelete = async (postId) => {
		const postElement = document.getElementById(`post-${postId}`);
		if (postElement) {
			postElement.classList.add('post--deleting');

			setTimeout(async () => {
				try {
					await deletePost(postId);
					setPosts((prev) => prev.filter((p) => p.postId !== postId));
				} catch (err) {
					console.error('Failed to delete post', err);
				}
			}, 300); // match CSS animation duration
		}
	};

	const sortedPosts = [...posts].sort((a, b) => {
		const dateA = new Date(a.createdAt);
		const dateB = new Date(b.createdAt);

		if (sortOrder === 'ascending') {
			return dateA - dateB;
		} else {
			return dateB - dateA;
		}
	});

	return (
		<>
			<PostSorter sortOrder={sortOrder} setSortOrder={setSortOrder} />
			<ForumWrapper
				posts={sortedPosts}
				onDelete={handleDelete}
				className="home"
			/>
		</>
	);
}

export default Home;
