import React, { useState } from 'react';
import Router from './router/Router';
import { PostsContext } from './context/PostsContext';
import NewPostBtn from './components/NewPostButton/NewPostBtn';

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
		<PostsContext.Provider value={{ posts, addPost: setPosts }}>
			<div className="app">
				<header className="app-header">
					<h1 className="app-header__title">QuickPost</h1>
				</header>

				<main className="app-main">
					<Router />
				</main>

				<footer className="app-footer">
					<p className="app-footer__text">© 2025 Helene Theodorsen</p>
				</footer>
				<NewPostBtn />
			</div>
		</PostsContext.Provider>
	);
}

export default App;
