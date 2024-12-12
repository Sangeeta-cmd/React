import { useState } from "react"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "./SearchBox.css"

export default function SearchBox({ updateInfo, displayInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "49ed7a9a0a69a4d97f4f32d59e36e596";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let result = {
                city: city,
                feelslike: jsonResponse.main.feels_like,
                humidity: jsonResponse.main.humidity,
                pressure: jsonResponse.main.pressure,
                temp: jsonResponse.main.temp,
                tempMax: jsonResponse.main.temp_max,
                tempMin: jsonResponse.main.temp_min,
                weather: jsonResponse.weather[0].description
            }
            console.log(result)
            return result;
        } catch (err) {
            throw err
        }
    }

    let handleInputChange = (evt) => {
        setCity(evt.target.value);
    }

    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            console.log(city)
            setCity("")
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo)
            displayInfo(true)
        } catch (err) {
            setError(true)
            displayInfo(false)
        }

    }

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField
                    required
                    id="city"
                    label="city name"
                    value={city}
                    onChange={handleInputChange}
                />
                <br />
                <br />
                <Button variant="contained" endIcon={<SendIcon />} type='submit'>Send</Button>
                {error && <p style={{ color: "red" }}>The place cannot found!</p>}
            </form>
        </div>
    )
}