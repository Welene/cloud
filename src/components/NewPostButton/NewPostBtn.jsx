import { useNavigate } from 'react-router-dom';
import './NewPostBtn.css';

// this is the square "+" button in the bottom corner for making a new post
function NewPostBtn() {
	const navigate = useNavigate();
	const token = localStorage.getItem('token');

	const handleClick = () => {
		navigate('/newpost');
	};

	if (!token) {
		// if you are not logged in the button is *POOF* gone
		return null;
	}

	return (
		<button className="add-post" onClick={handleClick}>
			<figure className="add-post__icon">+</figure>
		</button>
	);
}

export default NewPostBtn;
