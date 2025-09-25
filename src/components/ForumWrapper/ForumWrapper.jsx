import React from 'react';
import { ForumPost } from '../ForumPost/ForumPost';
import './ForumWrapper.css';

// THIS COMPONENT IS THE WRAPPER FOR THE ~ ForumPosts ~ COMPONENT, IT CONTAINS ALL POSTS THAT EXIST

export const ForumWrapper = ({ posts }) => {
	return (
		<section className="forum-wrapper">
			{posts.map((post, index) => (
				<ForumPost
					key={index}
					username={post.username}
					title={post.title}
					content={post.content}
				/>
			))}
		</section>
	);
};
