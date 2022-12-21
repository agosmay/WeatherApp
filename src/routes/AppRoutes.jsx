import React from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from '../components/Home';
import Card from '../components/Card';

const AppRoutes = () => {
	
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/WeatherApp"
					element={<Home />}
				/>
				<Route 
					path="WeatherApp/city"
					element={<Card />}
				/>
				
			</Routes>
		</BrowserRouter>
	);
}

export default AppRoutes;