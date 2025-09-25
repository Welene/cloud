import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BigButton from '../../components/BigButton';
import './Login.css';

function Login() {
	const navigate = useNavigate();

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = () => {
		if (!username || !password) {
			alert('Please fill in all fields!');
			return;
		}

		// placeholder logic - replace with backend auth later
		console.log('Logging in:', { username, password });

		navigate('/'); // after login, go to homepage
	};

	return (
		<section className="login-section">
			<article className="login-content">
				<h2>Login</h2>

				<label>
					Username:
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						placeholder="Username"
					/>
				</label>

				<label>
					Password:
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Password"
					/>
				</label>
			</article>

			<BigButton text="Login" onClick={handleLogin} />
		</section>
	);
}

export default Login;
