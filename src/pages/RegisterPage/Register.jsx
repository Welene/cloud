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
			<article className="register-content">
				<h2>Register</h2>

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

				<label>
					Confirm Password:
					<input
						type="password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						placeholder="Confirm Password"
					/>
				</label>
			</article>

			<BigButton text="Register" onClick={handleRegister} />
		</section>
	);
}

export default Register;
