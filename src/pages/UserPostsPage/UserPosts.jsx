import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ForumWrapper } from '../../components/ForumWrapper/ForumWrapper';
import axios from 'axios';
import './UserPosts.css';
import { errorHandler } from '../../middlewares/errorHandler';

const API_URL = import.meta.env.VITE_API_URL;

function UserPosts() {
	const { userId } = useParams();
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		if (!userId) return;

		axios
			.get(`${API_URL}/posts/${userId}`)
			.then((res) => setPosts(res.data || []))
			.catch((err) => {
				const response = errorHandler(err);
				console.error(response.body.message);
				setPosts([]);
			});
	}, [userId]);

	return <ForumWrapper posts={posts} className="user" />;
}

export default UserPosts;
