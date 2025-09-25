import Router from './router/Router';

function App() {
	return (
		<div className="app">
			<header className="app-header">
				<h1 className="app-header__title">My Forum</h1>
			</header>

			<main className="app-main">
				<Router />
			</main>

			<footer className="app-footer">
				<p className="app-footer__text">© 2025 Helene Theodorsen</p>
			</footer>
		</div>
	);
}

export default App;
