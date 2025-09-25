import { ForumWrapper } from '../../components/ForumWrapper/ForumWrapper';
import './Home.css';
import { PostsContext } from '../../context/PostsContext';
import React, { useContext } from 'react';

function Home() {
	const { posts, setPosts } = useContext(PostsContext);
	// using useState to --> re-rencder the ForumWrapper component's old posts (posts) with new posts (setPosts)
	// this is because: we want the new post from "NewPostPage.jsx" to actually be shown on top of all the old ones AKA shows the newest post first!
	// NewPostPage.jsx navigates to this page (HomePage) when button is clicked so navigation and setPosts happens automatically

	return (
		// This is where I wrap all the shit into one context and sends it away to NewPostPage
		<>
			<ForumWrapper posts={posts} addPost={setPosts} className="home" />
		</>
	);
}

export default Home;
