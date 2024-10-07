import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    
    // Define the API URL
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"; 
    const API_KEY = "c223b0463eef5df08679ab3d57c1bb9b";

    const getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city.trim()}&appid=${API_KEY}&units=metric`); // Trim spaces
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            let jsonResponse = await response.json();
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description
            };

            return result;
        } catch (error) {
            setError(true);
        }
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
    }

    let handleSubmit = async (evt) => {
        evt.preventDefault();
        setCity("");
        let newinfo = await getWeatherInfo();
        if (newinfo) {
            updateInfo(newinfo);
            setError(false); // Reset the error if a valid response is received
        }
    }

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <TextField
                        id="city"
                        label="City Name"
                        variant="outlined"
                        value={city}
                        required
                        onChange={handleChange}
                        className="city-input" // Add custom class
                    />
                </div>
                <br />
                <Button variant="contained" type='submit'>
                    Search
                </Button>
                {error && <p className="error-message">No such place exists</p>}
            </form>
        </div>
    );
}


