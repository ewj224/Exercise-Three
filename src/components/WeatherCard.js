import React from 'react';

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
            <h2>{city}</h2>
            <p>Humidity: {humidity}%</p>
            <p>Current Tempurature: {currentTemp}</p>
            <p>Lows: {lowTemp}</p>
            <p>Highs: {highTemp}</p>
            <p>Weather Type: {weatherType}</p>
        </div>
    )
    
}
    <div className='WeatherCard'>
    </div>

export default WeatherCard;