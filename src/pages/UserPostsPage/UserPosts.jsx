import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ForumWrapper } from '../../components/ForumWrapper/ForumWrapper';
import { deletePost } from '../../functions/deletePost';
import axios from 'axios';
import './UserPosts.css';
import PostSorter from '../../components/PostOrder/PostOrder';

const API_URL = import.meta.env.VITE_API_URL;

function UserPosts() {
	const { userId } = useParams();
	const [posts, setPosts] = useState([]);
	const [sortOrder, setSortOrder] = useState('descending');

	useEffect(() => {
		if (!userId) return;
		axios
			.get(`${API_URL}/posts/${userId}`)
			.then((res) => setPosts(res.data.posts || []))
			.catch((error) => console.error('Cannot get posts', error));
	}, [userId]);

	const handleDelete = async (postId) => {
		const postElement = document.getElementById(`post-${postId}`);
		if (postElement) {
			postElement.classList.add('post--deleting');
			setTimeout(async () => {
				try {
					await deletePost(postId);
					setPosts((prev) => prev.filter((p) => p.postId !== postId));
				} catch (error) {
					console.error('Failed to delete post', error);
				}
			}, 300);
		}
	};

	const sortedPosts = [...posts].sort((a, b) => {
		const dateA = new Date(a.createdAt);
		const dateB = new Date(b.createdAt);
		return sortOrder === 'ascending' ? dateA - dateB : dateB - dateA;
	});

	return (
		<>
			<PostSorter sortOrder={sortOrder} setSortOrder={setSortOrder} />
			<ForumWrapper
				posts={sortedPosts}
				onDelete={handleDelete}
				className="user"
			/>
		</>
	);
}

export default UserPosts;
