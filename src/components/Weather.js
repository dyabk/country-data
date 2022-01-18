import React , { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ( { city } ) => {
    
    const api_key = process.env.REACT_APP_API_KEY
    const [weather, setWeather] = useState(null)

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
            {weather.main.temp}
            </div> 
        )
    }
    else {
        return <div>Still fetching data...</div>
    }
}

export default Weather