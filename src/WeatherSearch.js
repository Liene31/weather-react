import React from "react";
import axios from "axios";

export default function WeatherSearch() {

    function handleResponse(response) {
        
        console.log(response.data);

    }

    let apiKey = `7f7b212e480de247710aebbd9f9c68bd`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
    return(
    <h1>Creating weather App</h1>
    );
}