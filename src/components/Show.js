import React from 'react'
import './show.css'

function Show(props) {
    const {data} = props
    return (
        <div className="weather">
            <div className="details">
           {data.cod != 404 ? ( 
                 <ul className="list">
                    <li>Location: {data.name}</li>
                    <li>Condition: {data.weather[0].main}</li>
                    <li>Description: {data.weather[0].description}</li>
                    <li>Temperature: {Math.floor(data.main.temp - 273.15)}<sup>o</sup>C</li>
                    <li>Pressure: {data.main.pressure}hpa</li>
                    <li>Humidity: {data.main.humidity}</li>
                    <li>SunRise: {new Date(data.sys.sunrise * 1000).toLocaleTimeString()} </li>
                    <li>Sunset: {new Date(data.sys.sunset * 1000).toLocaleTimeString()}</li>
                    <li>Wind Speed: {Math.floor((data.wind.speed * 18) / 5)} km/hr </li>
                </ul>
                ) : (
                    <div className="error">
                        <h2>{data.message}</h2>
                    </div>
                )
            }
            </div>
        </div>
    )
}

export default Show
