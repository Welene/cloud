import React, { useState } from 'react';
import Router from './router/Router';
import { PostsContext } from './context/PostsContext';

function App() {
	const [posts, setPosts] = useState([]);

	return (
		<PostsContext.Provider value={{ posts, setPosts }}>
			<Router />
		</PostsContext.Provider>
	);
}

export default App;
