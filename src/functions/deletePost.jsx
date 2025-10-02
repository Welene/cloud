import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export async function deletePost(postId) {
	const token = localStorage.getItem('token');
	if (!token) throw new Error('You need to be logged in first');

	await axios.delete(`${API_URL}/posts/delete/${postId}`, {
		headers: { Authorization: `Bearer ${token}` },
	});
}
