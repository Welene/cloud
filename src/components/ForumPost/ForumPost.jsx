import React from 'react';
import './ForumPost.css';

// THIS COMPONENT SHOWS ONLY ONE POST (with the post's title, text/content & username)
export const ForumPost = ({ username, title, content }) => {
	return (
		<article className="post">
			<h2 className="post__title">{title}</h2>
			<p className="post__txt">{content}</p>
			<p className="post__user">{username}</p>
		</article>
	);
};
