import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BigButton from '../../components/BigButton';
import './Register.css';

function Register() {
	const navigate = useNavigate();

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const handleRegister = () => {
		if (!username || !password || !confirmPassword) {
			alert('Please fill in all fields!');
			return;
		}

		if (password !== confirmPassword) {
			alert('Passwords do not match!');
			return;
		}

		// placeholder logic - replace with backend registration later
		console.log('Registering:', { username, password });

		navigate('/login'); // after registration, go to login page
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
			</article>

			<BigButton text="Register" onClick={handleRegister} />
		</section>
	);
}

export default Register;
