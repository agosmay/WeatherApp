import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
	
	<>
		<h1>Este es el HOME</h1>
		
		<button><Link to="/city"className="btn">Search a city</Link></button>
	</>
	
	);
}

export default Home;