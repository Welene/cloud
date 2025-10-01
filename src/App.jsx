import React, { useState } from 'react';
import Router from './router/Router';
import { PostsContext } from './context/PostsContext';
import NewPostBtn from './components/NewPostButton/NewPostBtn';

function App() {
	const [posts, setPosts] = useState([]);

	return (
		<PostsContext.Provider value={{ posts, setPosts }}>
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
