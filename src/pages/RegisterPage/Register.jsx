import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BigButton from '../../components/BigButton';
import './Register.css';
import { errorHandler } from '../../middlewares/errorHandler';
import { registerUser } from '../../functions/registerUser';

function Register() {
	const navigate = useNavigate();

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [error, setError] = useState(''); // the visible error msg on the page

	const handleRegister = async () => {
		setError('');

		if (!username || !password || !confirmPassword) return;
		if (password !== confirmPassword) return;

		try {
			const result = await registerUser(username, password);
			console.log(result);
			navigate('/login');
		} catch (error) {
			const response = errorHandler(error);
			setError(response.body.message);
		}
	};

	return (
		<section className="register-section">
			<article className="register-section__content">
				<h2 className="register-section__title">REGISTER</h2>

				<label
					className="register-section__label--name"
					htmlFor="username">
					Username:
				</label>
				<input
					className="register-section__input"
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>

				<label
					className="register-section__label--pass1"
					htmlFor="password">
					Password:
				</label>
				<input
					className="register-section__input"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<label
					className="register-section__label--pass2"
					htmlFor="password">
					Confirm password:
				</label>
				<input
					className="register-section__input"
					type="password"
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
				/>
				{error && (
					<p className="register-error" style={{ color: 'red' }}>
						{error}
					</p>
				)}
			</article>

			<BigButton text="CREATE" onClick={handleRegister} />
		</section>
	);
}

export default Register;
