import SearchBox from "./SearchBox.jsx"
import InfoBox from  "./InfoBox.jsx";
import { useState } from "react"
export default function WeartherApp()
{
     const [weatherInfo,setweatherInfo]=useState({
       city:"Delhi",
        feelsLike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze",
    });

    let updateInfo=(newinfo)=>
    {
        setweatherInfo(newinfo);
    }
    
    return (
        <div style={{textAlign:"center" ,  border: '2px solid',
        borderColor: 'red green blue yellow', 
        borderRadius: '10px', 
        padding: '10px',
        width:'500px' }}>
            <h2>WeatherSummary</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}