import React, { useState } from 'react';
import Router from './router/Router';
import { PostsContext } from './context/PostsContext';

function App() {
	// This state now lives in App so both Home and NewPostPage can access it
	const [posts, setPosts] = useState([
		// initial mockup posts
		{
			username: 'Sjagge1239',
			title: 'Hallo hallo',
			content: 'This is my first post!',
		},
		{
			username: '-Bobben-',
			title: 'I am testing this',
			content: 'Loving it so far woo',
		},
		{
			username: 'Sjagge1239',
			title: 'Hallo hallo',
			content: 'This is my first post!',
		},
		{
			username: '-Bobben-',
			title: 'I am testing this',
			content: 'Loving it so far woo',
		},
		{
			username: 'Sjagge1239',
			title: 'Hallo hallo',
			content: 'This is my first post!',
		},
		{
			username: '-Bobben-',
			title: 'I am testing this',
			content: 'LAST POST',
		},
	]);

	return (
		// Now Router and all its pages can access posts/addPost
		<PostsContext.Provider value={{ posts, addPost: setPosts }}>
			<Router />
		</PostsContext.Provider>
	);
}

export default App;
