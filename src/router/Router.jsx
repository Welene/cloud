import React from 'react';
import {
	createBrowserRouter,
	RouterProvider,
	Outlet,
	useNavigate,
} from 'react-router-dom'; // had to make a layout in the end, had accidentally put header and footer outside of footer: this was the fix, so now I can click the header and navigate
import Home from '../pages/HomePage/Home';
import UserPosts from '../pages/UserPostsPage/UserPosts';
import NewPostPage from '../pages/NewPostPage/NewPostPage';
import Login from '../pages/LoginPage/Login';
import Register from '../pages/RegisterPage/Register';
import NewPostBtn from '../components/NewPostButton/NewPostBtn';

const Layout = () => {
	const navigate = useNavigate();

	const handleHeaderClick = () => {
		navigate('/');
	};

	return (
		<div className="app">
			<header className="app-header">
				<h1 className="app-header__title" onClick={handleHeaderClick}>
					QuickPost
				</h1>
			</header>
			<main className="app-main">
				<Outlet /> {/* content of the page here */}
			</main>
			<footer className="app-footer">
				<p className="app-footer__text">© 2025 Helene Theodorsen</p>
			</footer>
			<NewPostBtn />
		</div>
	);
};

const Router = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Layout />, // the layout will wrap all the different pages
			children: [
				{ path: '/', element: <Home /> },
				{ path: '/user/:userId', element: <UserPosts /> },
				{ path: '/login', element: <Login /> },
				{ path: '/register', element: <Register /> },
				{ path: '/newpost', element: <NewPostPage /> },
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default Router;
