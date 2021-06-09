import React, {useState} from 'react'
import './search.css'
import Show from './Show'

function SearchBar() {
    const [country, setCountry] = useState();
    const [place, setPlace] = useState();
    
    const  handle = async() => {
        const api = "429736441cf3572838aa10530929f7cd"
        const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${place},${country}&appid=${api}`).then(response => response.json()).then((data) => {
            console.log(data)
        })
    }

    

    return (
        <div>
            <div className="search">
                <input type="text" placeholder="Country" value={country}
                    onChange={(event) => setCountry(event.target.value)}
                />
                <input type="text" placeholder="Place" value={place}
                    onChange={(event) => setPlace(event.target.value)}
                />
                <button onClick={handle}>Search Location</button>
            </div>
            <Show />
        </div>
    )
}

export default SearchBar
