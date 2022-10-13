import React, {useEffect, useState, useMemo} from 'react';
import axios from "axios";
import { useSearchParams } from 'react-router-dom'
import { WEATHER_APP_API_KEY } from '../API_KEYS';
import WeatherCard from "../components/WeatherCard";
import Header from '../components/Header';


function Home(){
    //value stored in state for weather data
    const [weatherData, setWeatherData] = useState({}); 
    const [city, setCity] = useState("Brooklyn");
    const [searchParams] = useSearchParams();
    //Cities: Seoul, Chicago, Paris, Brooklyn

    useEffect(()=>{
        const cityToQuery = searchParams.get("city") || city;
        setCity(cityToQuery);
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${cityToQuery}&appid=${WEATHER_APP_API_KEY}&units=imperial`
            )
            .then(function(response){
                setWeatherData(response.data)
            })
            .catch(function(error){
                console.warn(error);
                setWeatherData({});
            });
            //display this weather data in our app
    }, []);

    const { cloudiness } = useMemo(()=> {
        const weatherClouds = weatherData.clouds || {}
        return{
            cloudiness:weatherClouds.all
        }
    }, [weatherData])

    const { currentTemp, highTemp, humidity, lowTemp } = useMemo(() =>{
        const weatherMain = weatherData.main || {}
        return {
            currentTemp:Math.round(weatherMain.temp),
            highTemp:Math.round(weatherMain.temp_max),
            humidity:weatherMain.humidity,
            lowTemp: Math.round(weatherMain.temp_min),
        }
    }, [weatherData])

    const { windSpeed } = useMemo (() =>{
        const weatherSpeed = weatherData.wind || {}
        return{
            windSpeed:weatherSpeed.speed
        }
    }, [weatherData])


    //unsure why it sometimes works and doesn't work
    const { weatherType } = useMemo (() =>{
        const weatherSet = weatherData.weather && weatherData.weather[0] || {}
        return{
            weatherType:weatherSet.main
        }
    }, [weatherData])

    console.log(weatherType);
    console.log("state value", weatherData);

    return(
    <div>
        <Header />
        <h1>Weather App</h1>
        <WeatherCard 
        city={city} 
        cloudiness={cloudiness}
        currentTemp={currentTemp}
        highTemp={highTemp}
        humidity={humidity}
        lowTemp={lowTemp}
        weatherType={weatherType}
        windSpeed={windSpeed}
        
        />
    </div>
    );
}

export default Home;