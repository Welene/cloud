import React from 'react';
import './BigButton.css';

const BigButton = ({ text, onClick }) => {
	return (
		<button className="big-button" onClick={onClick}>
			{text}
		</button>
	);
};

export default BigButton;
