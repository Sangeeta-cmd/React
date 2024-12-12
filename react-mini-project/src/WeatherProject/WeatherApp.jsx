import {useState} from "react"
import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"

export default function WeatherApp(){
    let [weatherInfo , setWeatherInfo] = useState({})
    let [infoFetched, setInfoFetched] = useState(false)

    let updateInfo = (result)=>{
        setWeatherInfo(result)
    }
    let displayInfo = (value)=>{
        setInfoFetched(value)
    }

    return(
        <div style={{textAlign: "center"}}>
            <h1>Weather App</h1>
            <SearchBox updateInfo = {updateInfo} displayInfo = {displayInfo} />
            { infoFetched && <InfoBox  info = {weatherInfo} />}
        </div>
    )
}