import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/HomePage/Home';
// import UserMessages from '../pages/UserPostsPage/UserPosts';
// import Login from '../pages/LoginPage/Login';
// import Register from '../pages/RegisterPage/Register';

const Router = () => {
	const router = createBrowserRouter([
		{ path: '/', element: <Home /> },
		// { path: '/user/:username', element: <UserMessages /> },
		// { path: '/login', element: <Login /> },
		// { path: '/register', element: <Register /> },
	]);

	return <RouterProvider router={router} />;
};

export default Router;
