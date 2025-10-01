import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BigButton from '../../components/BigButton';
import './Login.css';
import { loginUser } from '../../functions/loginUser';
import { errorHandler } from '../../middlewares/errorHandler';

function Login() {
	const navigate = useNavigate();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleLoginClick = async () => {
		if (!username || !password) return;

		try {
			const result = await loginUser(username, password);
			localStorage.setItem('token', result.token);
			console.log('Logged in:', result);
			navigate('/');
		} catch (err) {
			const response = errorHandler(err);
			console.error(response.body.message);
			alert(response.body.message);
		}
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

			<BigButton text="LOG IN" onClick={handleLoginClick} />
		</section>
	);
}

export default Login;
