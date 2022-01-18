import React , { useState, useEffect } from 'react'
import axios from 'axios'
import { CardinalDirection } from 'cardinal-direction'

const Weather = ( { city } ) => {
    
    const api_key = process.env.REACT_APP_API_KEY
    const [weather, setWeather] = useState(null)
    const Compass = require("cardinal-direction");

    useEffect(() => {
        console.log('effect')
        axios
          .get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`)
          .then(response => {
            console.log('promise fulfilled')
            console.log(response.data)
            setWeather(response.data)
          })

    }, [])
    console.log("Weather is now:", weather)

    if (weather) {
        return (
            <div>
            <h3>Weather in {city}</h3>
            <b>temperature:</b> {Math.round(weather.main.temp - 273.15)} Celsius<br />
            <picture>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" style={{backgroundColor: 'purple', display: 'block'}}/>
            </picture>
            <b>wind:</b> {Math.round(weather.wind.speed * 2.237)} mph direction {Compass.cardinalFromDegree(weather.wind.deg)}
            </div> 
        )
    }
    else {
        return <div>Still fetching data...</div>
    }
}

export default Weather