import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from '@reach/router';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Router>
				<Home path="/" />
			</Router>
		</div>
	);
}

export default App;
