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
            <p className="">Humidity: {humidity}%</p>
            <p className="">Current Tempurature: {currentTemp} F</p>
            <p className="">Lows: {lowTemp} F</p>
            <p className="">Highs: {highTemp} F</p>
            <p className="">Wind Speed: {windSpeed} mph</p>
            <p className="">Cloudiness: {cloudiness}%</p>
            {/* <p>Cloudiness: {cloudiness}</p> */}
        </div>
    )
    
}
    <div className='WeatherCard'>
    </div>

export default WeatherCard;