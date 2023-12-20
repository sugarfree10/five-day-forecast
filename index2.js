
export { showTodayForecast, showFiveDaysForecast };
    
function fahrenheitToCelsius(fahrenheit) {
    var celsius = (fahrenheit - 32) * (5 / 9);
    return celsius;

}
    

const showTodayForecast = (weatherData, city) => {
    const currentLocation = document.getElementById("today-location");
    const currentDate = document.getElementById("todayDate-container");
    const todayClouds = document.getElementById("today-clouds");
    const windHighlight = document.getElementById("wind-highlight");
    const humidityHighlight = document.getElementById("humidity-highlight");
    const vision = document.getElementById("vision");
    const airHigh = document.getElementById("air-highlight");

    currentLocation.innerHTML = `
    <h3> ${city} </h3>
    `;

    currentDate.innerHTML = `
    <p> ${new Date(weatherData.dt_txt).toUTCString().replace(' GMT', '')} </p>
    `;


    todayClouds.innerHTML = `
    <h3> ${weatherData.weather[0].main} </h3>
    `;
     
    windHighlight.innerHTML = `
    <h4> ${weatherData.wind.speed} mph </h4>
    `;

    humidityHighlight.innerHTML = `
    <h4> ${weatherData.main.humidity} % </h4>
    `;

    vision.innerHTML = `
    <h4> ${weatherData.visibility} miles </h4>
    `;

    airHigh.innerHTML = `
    <h4> ${weatherData.main.pressure} mb </h4>
    `;

    
};

const showFiveDaysForecast = (pairedWeatherInfo) => {
    const fiveDaysCards = document.getElementById("five-cards");
    const cardsDate = document.getElementById("card-date");

    for (const key in pairedWeatherInfo) {
        const item = pairedWeatherInfo[key][0];
        
        cardsDate.innerHTML += `
        <div style = "width: 15%; height: 100%; border: 3px solid white; background-color: #1E213A;">
            <p> ${new Date(item.dt_txt).toUTCString().replace(' GMT', '')} </p>
            
            <h5> ${fahrenheitToCelsius(item.main.temp)} ℃</h5>
        </div>
        `
    }

      
}





