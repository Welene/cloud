import React from 'react';
import './ForumPost.css';
import { useNavigate } from 'react-router-dom';

// THIS COMPONENT SHOWS ONLY ONE POST (with the post's title, text/content & username)
export const ForumPost = ({ userId, username, title, content }) => {
	const navigate = useNavigate();

	const handleUsernameClick = () => {
		// when onClick is done -- starts the handleUsernameClick function that navigates you to the user's posts (another page)
		navigate(`/user/${userId}`);
	};

	return (
		<article className="post">
			<h3 className="post__title">{title}</h3>
			<p className="post__txt">{content}</p>
			<p className="post__user" onClick={handleUsernameClick}>
				{username}
			</p>
		</article>
	);
};
