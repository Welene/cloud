import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export async function editPost(postId, { title, content }) {
	const token = localStorage.getItem('token');
	if (!token) throw new Error('You need to be logged in first');

	await axios.put(
		`${API_URL}/posts/${postId}`,
		{ title, content },
		{
			headers: { Authorization: `Bearer ${token}` },
		}
	);
}
