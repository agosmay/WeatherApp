import React , { useState } from 'react';
import axios from 'axios';
import { ENV } from '../environment/environment';
import { Link } from 'react-router-dom';
import './stylesheets/Card.css';

const Card  = () => {
	
	

	const [weatherData, setWeatherData] = useState([])
	const [city, setCity] = useState('')

	
	const getWeather = (event) => {
			event.preventDefault();
			fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&id=${ENV.API_ID}&appid=${ENV.API_KEY}`)
			.then(res=> res.json())
			.then(data=> {
				setWeatherData(data)
				console.log(data)
				setCity('')
			})
		
	}
	
	return(
		<>
			<div className="container">
				<div className="input-container">
					<input  placeholder="Enter City..." onChange={e=>setCity(e.target.value)} className="input" value={city}/>
					<button type="button" className="btn" onClick={getWeather}>VER CLIMA</button>
				</div>
					{typeof weatherData.main === 'undefined' ? (
						<div>
							<p className="sentence">Welcome to weather app! Enter in a city to get the weather of </p>
						</div>
					
					) : (
						<div className="climate-container">
							<p className="sentence">{weatherData.name}</p>
							<p className="sentence">{Math.round(weatherData.main.temp)}°C</p>
							<p className="sentence">{weatherData.weather[0].main}</p>
						</div>
					
					)}
					
					{weatherData.cod==="404" ? (
						<p className="sentence">City not found !</p>
					
					) : (
						<>
							
						</>
					)}
					<button className="btn" onClick={()=> setWeatherData("")}><Link to="/city" className="btn">Ask a new city</Link></button>
			</div>	
			<div>
				<button className="btn"><Link to="/" className="btn">Back to Home</Link></button>
			</div>
		</>
	);
	
}

export default Card;