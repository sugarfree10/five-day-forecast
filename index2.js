
export { showTodayForecast, showFiveDaysForecast };
    
function fahrenheitToCelsius(fahrenheit) {
    var celsius = (fahrenheit - 32) * (5 / 9);
    return celsius;
};

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
};



const showTodayForecast = (weatherData, city) => {
    const currentLocation = document.getElementById("today-location");
    const currentDate = document.getElementById("todayDate-container");
    const todayClouds = document.getElementById("today-clouds");
    const todayCloudsImage = document.getElementById("today-cloud-image");
    const windHighlight = document.getElementById("wind-highlight");
    const humidityHighlight = document.getElementById("humidity-highlight");
    const vision = document.getElementById("vision");
    const airHigh = document.getElementById("air-highlight");
    const todayTemp = document.getElementById("today-temp");
    
    if (weatherData.weather[0].main === "Clouds") {
        todayCloudsImage.innerHTML = `
        <img src="./images/LightCloud.png" alt="picture">
        `;
    } else if (weatherData.weather[0].main === "Clear") {
        todayCloudsImage.innerHTML = `
        <img src="./images/Clear.png" alt="picture">
        `;
    } else if (weatherData.weather[0].main === "Rain") {
        todayCloudsImage.innerHTML = `
        <img src="./images/Shower.png">
        `
    }

    todayTemp.innerHTML = `
    <h6> ${fahrenheitToCelsius(weatherData.main.temp).toFixed(1)} ℃</h6>
    `;

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
    

    cardsDate.innerHTML = "";

    for (const key in pairedWeatherInfo) {
        const item = pairedWeatherInfo[key][0];
        console.log(item);
        let imageSrc = "";
        if (item.weather[0].main === "Clouds") {
            imageSrc = "./images/LightCloud.png";
        } else if (item.weather[0].main === "Clear") {
            imageSrc = "./images/Clear.png";
        } else if (item.weather[0].main === "Rain") {
            imageSrc = "./images/Shower.png";
        }

        cardsDate.innerHTML += `
        <div style = "width: 15%; height: 170px; background-color: #1E213A; display: flex; flex-direction: column; justify-content: space-evenly;">
            <p style = "front-size: 3px;"> ${new Date(item.dt_txt).toUTCString().replace(' GMT', '')} </p>
            <img src="${imageSrc}" alt="${item.weather[0].main}">
            <h5 class="temperature"> ${fahrenheitToCelsius(item.main.temp).toFixed(1)} ℃</h5>
            
        </div>
        `
    }

      
}





