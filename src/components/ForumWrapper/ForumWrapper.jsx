import React from 'react';
import { ForumPost } from '../ForumPost/ForumPost';

export const ForumWrapper = ({ posts, onDelete, className }) => {
	return (
		<div className={`forum-wrapper ${className}`}>
			{posts.map((post) => (
				<ForumPost
					key={post.postId}
					postId={post.postId}
					userId={post.userId}
					username={post.username}
					title={post.title}
					content={post.content}
					onDelete={onDelete}
				/>
			))}
		</div>
	);
};
