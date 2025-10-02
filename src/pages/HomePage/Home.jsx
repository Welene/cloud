import { ForumWrapper } from '../../components/ForumWrapper/ForumWrapper';
import './Home.css';
import { PostsContext } from '../../context/PostsContext';
import React, { useContext, useEffect } from 'react';
import axios from 'axios';

function Home() {
	const { posts, setPosts } = useContext(PostsContext);
	const API_URL = import.meta.env.VITE_API_URL;
	// using useState to --> re-rencder the ForumWrapper component's old posts (posts) with new posts (setPosts)
	// this is because: we want the new post from "NewPostPage.jsx" to actually be shown on top of all the old ones AKA shows the newest post first!
	// NewPostPage.jsx navigates to this page (HomePage) when button is clicked so navigation and setPosts happens automatically
	useEffect(() => {
		axios
			.get(`${API_URL}/posts`) // calls the getAllPosts function to show all GLOBAL posts on home page (posts by everyone)
			.then((res) => {
				setPosts(res.data.posts || []);
			})
			.catch((err) => console.error('Cannot fetch posts', err));
	}, []);
	return (
		// This is where I wrap all the shit into one context and sends it away to NewPostPage
		<>
			<ForumWrapper posts={posts} setPost={setPosts} className="home" />
		</>
	);
}

export default Home;
