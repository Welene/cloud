// this function does the API call to the backend
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export async function registerUser(username, password) {
	const response = await axios.post(`${API_URL}/register`, {
		// waits on POST call for <-- that URL
		username,
		password,
	});
	return response.data; // returns answer from the backend, so we can use it in the pages/Register.jsx file!
}
