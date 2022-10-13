import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faSun, faUmbrella, faSnowflake, faBolt } from '@fortawesome/free-solid-svg-icons'

//review a bit from recordings, different styling options
function WeatherIcon({weatherType}){
   switch(weatherType){
    case 'Clouds':
        return <FontAwesomeIcon icon={faCloud} />
    case 'Rain':
        return <FontAwesomeIcon icon={faUmbrella} />
    case 'Snow':
        return <FontAwesomeIcon icon={faSnowflake} />
    case 'Clear':
        return <FontAwesomeIcon icon={faSun} />
    default:
        return <FontAwesomeIcon icon={faSun} />
   }
   return <div>
        
        <FontAwesomeIcon icon={faSnowflake} />
        <FontAwesomeIcon icon={faBolt} />
        <FontAwesomeIcon icon={faUmbrella} />
    </div>
}

export default WeatherIcon;