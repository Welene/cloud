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
			alert('Please fill in all fields!'); // vi vil ikke ha alert, bytt ut senere
			return;
		}

		// placeholder logic - replace with backend auth later
		console.log('Logging in:', { username, password });

		navigate('/'); // after login, go to homepage
	};

	return (
		<section className="login-section">
			<article className="login-section__content">
				<h2 className="login-section__title">LOG IN</h2>

				<label
					className="login-section__label--name"
					htmlFor="username">
					Username:
				</label>
				<input
					className="login-section__input"
					id="username"
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>

				<label className="login-section__label-pass" htmlFor="password">
					Password:
				</label>
				<input
					className="login-section__input"
					id="password"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</article>

			<BigButton text="LOG IN" onClick={handleLogin} />
		</section>
	);
}

export default Login;
