import React, {useEffect, useState, useMemo} from 'react';
import axios from "axios";
import { WEATHER_APP_API_KEY } from '../API_KEYS';
const openWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=Orlando&appid=${WEATHER_APP_API_KEY}`;

function Home(){
    //value stored in state for weather data
    const [weatherData, setWeatherData] = useState({}); 
//writing directions here
// Query OpenWeatherAPIR for weather data
    // make request to open weather

    useEffect(()=>{
        axios
            .get(openWeatherURL)
            .then(function(response){
                setWeatherData(response.data)
            })
            .catch(function(error){
                console.warn(error);
                setWeatherData({});
            });
            //display this weather data in our app
    }, [])
    
    return(
    <div>
        <h1>Weather App</h1>
        <h2>{weatherData.name}</h2>
        <p>Humidity: {weatherData.main && weatherData.main.humidity}%</p>
    </div>
    );
}

export default Home;