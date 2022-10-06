import React, {useEffect, useState, useMemo} from 'react';
import axios from "axios";
import { WEATHER_APP_API_KEY } from '../API_KEYS';
import WeatherCard from "../components/WeatherCard";
const openWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=Orlando&appid=${WEATHER_APP_API_KEY}&units=imperial`;

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
    }, []);

    const { currentTemp, highTemp, humidity, lowTemp } = useMemo(() =>{
        const weatherMain = weatherData.main || {}
        return {
            currentTemp:Math.round(weatherMain.temp),
            highTemp:Math.round(weatherMain.temp_max),
            humidity:weatherMain.humidity,
            lowTemp: Math.round(weatherMain.temp_min)
        }
    }, [weatherData])


    console.log("state value", weatherData);

    return(
    <div>
        <h1>Weather App</h1>
        <WeatherCard 
        city={'Orlando'} 
        humidity={humidity} 
        currentTemp={currentTemp}
        lowTemp={lowTemp}
        highTemp={highTemp}
        />
    </div>
    );
}

export default Home;