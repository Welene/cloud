import React from 'react';
import './ForumPost.css';
import { useNavigate } from 'react-router-dom';
import { getCurrentUserId } from '../../functions/authHelper';

export const ForumPost = ({
	postId,
	userId,
	username,
	title,
	content,
	onDelete,
}) => {
	const navigate = useNavigate();
	const currentUserId = getCurrentUserId();

	const handleUsernameClick = () => {
		navigate(`/user/${userId}`);
	};

	return (
		<article className="post">
			<h3 className="post__title">{title}</h3>
			<p className="post__txt">{content}</p>
			<p className="post__user" onClick={handleUsernameClick}>
				{username}
			</p>

			{/* Show delete button only for the logged-in user's posts */}
			{userId === currentUserId && (
				<button
					className="post__delete-btn"
					onClick={() => onDelete(postId)}>
					DEL
				</button>
			)}
		</article>
	);
};
