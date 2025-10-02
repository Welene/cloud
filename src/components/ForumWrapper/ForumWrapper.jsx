import React from 'react';
import { ForumPost } from '../ForumPost/ForumPost';
import './ForumWrapper.css';
import NewPostBtn from '../NewPostButton/NewPostBtn';

export const ForumWrapper = ({ posts, className }) => {
	return (
		<section className={`forum-wrapper ${className}`}>
			{/* ${className} --> sender ekstra/bonus klassenavn som prop */}
			{posts.map((post, index) => (
				<ForumPost
					key={index}
					username={post.username}
					userId={post.userId}
					title={post.title}
					content={post.content}
				/>
			))}
			<NewPostBtn />
		</section>
	);
};
