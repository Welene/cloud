import { ForumWrapper } from '../../components/ForumWrapper/ForumWrapper';
import './Home.css';
import { PostsContext } from '../../context/PostsContext';
import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { errorHandler } from '../../middlewares/errorHandler';

function Home() {
	const { posts, setPosts } = useContext(PostsContext);

	useEffect(() => {
		const API_URL = import.meta.env.VITE_API_URL;

		axios
			.get(`${API_URL}/posts`)
			.then((res) => setPosts(res.data || []))
			.catch((err) => {
				const response = errorHandler(err);
				console.error(response.body.message);
				setPosts([]);
			});
	}, []);

	return <ForumWrapper posts={posts} setPosts={setPosts} className="home" />;
}

export default Home;
