import React from 'react';
import { useParams } from 'react-router-dom';
import { ForumWrapper } from '../../components/ForumWrapper/ForumWrapper';
import './UserPosts.css';

function UserPosts() {
	const { username } = useParams();
	// henter parameteret username
	// endre dette til ID senere når jeg lager EKTE API -- dette er mockup stadie!

	const posts = [
		{
			// viser posts bare fra det {username} du klikte på
			username,
			title: 'hejhej',
			content: 'This is my first post!',
		},
		{
			username,
			title: 'I am  this',
			content: 'Lovifar woo',
		},
		{
			username,
			title: 'Hallo hallo',
			content: 'This is  post!',
		},
		{
			username,
			title: 'I am  this',
			content: 'Lovingo far woo',
		},
		{
			username,
			title: 'Hallo hallo',
			content: 'This is my first post!',
		},
		{
			username,
			title: 'I am  this',
			content: 'LAST POST',
		},
	];

	return <ForumWrapper posts={posts} className="user" />;
}

export default UserPosts;
