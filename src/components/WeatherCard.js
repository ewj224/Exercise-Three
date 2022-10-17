import React from 'react';
import WeatherIcon from "./WeatherIcon";

function WeatherCard({
    city, 
    cloudiness, 
    currentTemp, 
    highTemp, 
    humidity,
    lowTemp, 
    weatherType,
    windSpeed
}) {
    return(
        <div className='WeatherCard'>
            <h2 className="city">{city}</h2>
            <div className="WeatherIcon--WeatherType">
                <WeatherIcon weatherType={weatherType}/>
                <p className="type">{weatherType}</p>
            </div>
            <p className="humidity">Humidity: {humidity}%</p>
            <p className="cloudiness">Cloudiness: {cloudiness}%</p>
            <p className="windSpeed">Wind Speed: {windSpeed} mph</p>
            <p className="temp">Current Tempurature: {currentTemp} F</p>
            <p className="low">Lows: {lowTemp} F</p>
            <p className="high">Highs: {highTemp} F</p>
        </div>
    )
    
}
    <div className='WeatherCard'>
    </div>

export default WeatherCard;