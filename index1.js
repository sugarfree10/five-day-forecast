"use strict";

import { showTodayForecast, showFiveDaysForecast  } from "./index2.js";


const apiKey = "93e2ae367c4f1218ca8ee3a345186cd5";

const searchBar = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
        const coords = position.coords;
        const currentLat = coords.latitude;
        const currentLong = coords.longitude;
        fetchWeatherData(currentLat, currentLong);
    });
} else {
    console.log("Geolocation is not supported by this browser.");
}

const fetchWeatherData = async (lat, long) => {

    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${apiKey}`
    )
    const data = await response.json();
    
    
    const fiveWeatherData = data?.list;

    const pairedWeatherInfo = {};
   
    
    
    for (const item of fiveWeatherData) {
        const dateNumber = item.dt_txt.split(" ")[0].split("-")[2];
        

        if (pairedWeatherInfo[dateNumber]) {
            pairedWeatherInfo[dateNumber].push(item);
        } else {
           pairedWeatherInfo[dateNumber] = [item];
           
        };

       
    }
    const currentDateNumber = new Date().toDateString().split(" ")[2];

    const todayWeatherInformation = pairedWeatherInfo[currentDateNumber][0];
    
    showTodayForecast(todayWeatherInformation, data.city.name);
    showFiveDaysForecast(pairedWeatherInfo);   
    
      
};

// searchBar.addEventListener("click", async () => {
//     const inputValue = searchInput.value.trim();
//     if (inputValue === "") {
//         Swal.fire("Please, Enter Something!");
//     } else {
//         const response = await fetch(
//             `http://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&appid={apiKey}`
          
//         );
//         console.log(response);
//         searchInput.value = "";
//     }
    
// });
searchBar.addEventListener("click", async () => {
    const inputValue = searchInput.value.trim();
    if (inputValue === " ") {
        Swal.fire("Please, Enter Something!");
    } else {
        try {
            const response = await fetch(
                `http://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&appid=${apiKey}`
            )

            const data = await response.json();

            const locationCoords = data[0];
            const lat = locationCoords.lat;
            const lon = locationCoords.lon;

            fetchWeatherData(lat, lon);
            searchInput.value = "";
        } catch (error) {
            Swal.fire("Please, Enter Valid City!"); 
        }
    }
});






