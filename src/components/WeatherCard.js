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
            <p className="temp">{currentTemp} °F</p>
            <p className="high">Highs: {highTemp} °F</p>
            <p className="low">Lows: {lowTemp} °F</p>
            <div class="circle circle-one" style={{backgroundColor: `rgba(0,0,0,${(windSpeed/100)+.05})`}}></div>
            <div class="circle circle-two" style={{backgroundColor: `rgba(0,0,0,${(humidity/100)+.05})`}}></div>
            <div class="circle circle-three" style={{backgroundColor: `rgba(0,0,0,${(cloudiness/100)+.05})`}}></div>
            <p className="humidity">Humidity: {humidity}%</p>
            <p className="windSpeed">Wind Speed: {windSpeed} mph</p>
            <p className="cloudiness">Cloudiness: {cloudiness}%</p>
        </div>
    )
    
}
    <div className='WeatherCard'>
    </div>

export default WeatherCard;