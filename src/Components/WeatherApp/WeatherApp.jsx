import React, { useState } from 'react'
import './WeatherApp.css'
import drizzle_icon from '../Assets/cloudy (1).png';
import cloudy_icon from '../Assets/cloudy.png';
import rain_icon from '../Assets/heavy-rain.png';
import search_icon from '../Assets/search.png';
import snow_icon from '../Assets/snow.png';
import sun_icon from '../Assets/sun.png';
import wind_icon from '../Assets/wind.png';
import humidity_icon from '../Assets/humidity.png';
export const WeatherApp = () => {
    
    let api_key="1bd3d9cbafab6bff45b21fad64806886"

    const [wicon,setWicon] = useState(cloudy_icon);

    const search = async () => {
        const element = document.getElementsByClassName("cityInput")

        if(element[0].value==="")
        {
            return 0;
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

        let response = await fetch(url);
        let data = await response.json();

        const humidity = document.getElementsByClassName("humidity-percent");
        const wind = document.getElementsByClassName("wind-rate");
        const temp = document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("weather-location");

        humidity[0].innerHTML=data.main.humidity + " %";
        wind[0].innerHTML=Math.floor(data.wind.speed) + " km/h";
        temp[0].innerHTML=Math.floor(data.main.temp) + "°C";
        location[0].innerHTML = data.name;

        if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n" )
        {
            setWicon(sun_icon);
        }

        if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n" )
        {
            setWicon(cloudy_icon);
        }

        
        if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n" )
        {
            setWicon(drizzle_icon);
        }

        if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n" )
        {
            setWicon(drizzle_icon);
        }

        if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n" )
        {
            setWicon(rain_icon);
        }

        if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n" )
        {
            setWicon(rain_icon);
        }

        if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n" )
        {
            setWicon(snow_icon);
        }


    } 

 
    return (
    <div className='container'>
        <div className='top-bar'>
        <input type="text" className="cityInput" placeholder='Search' />
            <div className='search-icon' onClick={()=>{search()}}>
                <img src={search_icon} alt='' className='search'/>
            </div>
        </div>
        <div className='weather-image'>
            <img src={wicon} alt='' />
        </div>
        <div className='weather-temp'>24c</div>
        <div className='weather-location'>London</div>
        <div className='data-container'>
            <div className='element'>
                <img src={humidity_icon} alt=" " className='icon' />
                <div className='data'>
                    <div className="humidity-percent">64%</div>
                    <div className='text'>Humidity</div>
                </div>
            </div>
            <div className='element'>
                <img src={wind_icon} alt=" " className='icon' />
                <div className='data'>
                    <div className="wind-rate">18 km/h</div>
                    <div className='text'>Wind Speed</div>
                </div>
            </div>
        </div>
    </div>
  )
}
