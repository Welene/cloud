import React from 'react';
import { ForumWrapper } from '../../components/ForumWrapper/ForumWrapper';
import './Home.css';

function Home() {
	const posts = [
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
	];

	return <ForumWrapper posts={posts} />;
}

export default Home;
