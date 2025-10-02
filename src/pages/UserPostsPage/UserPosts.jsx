import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ForumWrapper } from '../../components/ForumWrapper/ForumWrapper';
import { deletePost } from '../../functions/deletePost';
import axios from 'axios';
import './UserPosts.css';

const API_URL = import.meta.env.VITE_API_URL;

function UserPosts() {
	const { userId } = useParams();
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		if (!userId) return;
		axios
			.get(`${API_URL}/posts/${userId}`)
			.then((res) => setPosts(res.data.posts || []))
			.catch((error) => console.error('Cannot get posts', error));
	}, [userId]);

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
		<ForumWrapper posts={posts} onDelete={handleDelete} className="user" />
	);
}

export default UserPosts;
