import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export async function createNewPost(title, content) {
	const token = localStorage.getItem('token'); // gets the token that got stored in LS after logging in - to prove that you can post
	if (!token) throw new Error('You need to be logged in to create posts');

	const response = await axios.post(
		`${API_URL}/posts`,
		{ title, content },
		{ headers: { Authorization: `Bearer ${token}` } } // send token for to backend so backend knows who is posting it (token already has username and userId in it)
	);

	return response.data;
}
