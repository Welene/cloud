import React from 'react';
import {
	createBrowserRouter,
	RouterProvider,
	Outlet,
	useNavigate,
	Navigate,
} from 'react-router-dom'; // had to make a layout in the end, had accidentally put header and footer outside of footer: this was the fix, so now I can click the header and navigate
import Home from '../pages/HomePage/Home';
import UserPosts from '../pages/UserPostsPage/UserPosts';
import NewPostPage from '../pages/NewPostPage/NewPostPage';
import Login from '../pages/LoginPage/Login';
import Register from '../pages/RegisterPage/Register';
import NewPostBtn from '../components/NewPostButton/NewPostBtn';
import EditPostPage from '../pages/EditPostPage/EditPost';

const Layout = () => {
	const navigate = useNavigate();
	const handleHeaderClick = () => navigate('/home');

	return (
		<div className="app">
			<header className="app-header">
				<h1 className="app-header__title" onClick={handleHeaderClick}>
					QuickPost
				</h1>
			</header>
			<main className="app-main">
				<Outlet />{' '}
				{/* everything that is on that page is in Outlet, here */}
			</main>
			<footer className="app-footer">
				<p className="app-footer__text">© 2025 Quickpost</p>
			</footer>
			<NewPostBtn />
		</div>
	);
};

const Router = () => {
	const token = localStorage.getItem('token');

	const router = createBrowserRouter([
		{
			path: '/',
			element: <Layout />,
			children: [
				{
					path: '/',
					element: token ? (
						<Navigate to="/home" replace />
					) : (
						<Navigate to="/register" replace />
					),
				},
				{ path: '/home', element: <Home /> },
				{ path: '/user/:userId', element: <UserPosts /> },
				{ path: '/login', element: <Login /> },
				{ path: '/register', element: <Register /> },
				{ path: '/newpost', element: <NewPostPage /> },
				{ path: '/edit/:postId', element: <EditPostPage /> },
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default Router;
