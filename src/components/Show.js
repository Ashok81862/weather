import React from 'react'
import './show.css'
function Show() {
    return (
        <div className="weather">
            <div className="details">
                <ul className="list">
                    <li>Location: Kathmandu</li>
                    <li>Condition: Rain</li>
                    <li>Description: light rain</li>
                    <li>Temperature: 297.17</li>
                    <li>Pressure: 1003</li>
                    <li>Humidity: 75</li>
                    <li>SunRise: 46546546</li>
                </ul>
            </div>
        </div>
    )
}

export default Show
