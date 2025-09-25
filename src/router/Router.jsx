import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/HomePage/Home';
import UserPosts from '../pages/UserPostsPage/UserPosts';
import NewPostPage from '../pages/NewPostPage/NewPostPage';
import Login from '../pages/LoginPage/Login';
import Register from '../pages/RegisterPage/Register';

const Router = ({ posts, addPost }) => {
	// posts (old) & addPosts (new) props have to PASS THROUGH router to jump down to Home (all the way from NewPostPage)!
	const router = createBrowserRouter([
		{ path: '/', element: <Home /> },
		{ path: '/user/:username', element: <UserPosts /> },
		{ path: '/login', element: <Login /> },
		{ path: '/register', element: <Register /> },
		{ path: '/newpost', element: <NewPostPage /> },
	]);

	return <RouterProvider router={router} />;
};

export default Router;
