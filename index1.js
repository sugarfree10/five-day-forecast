
const apiKey = "93e2ae367c4f1218ca8ee3a345186cd5";

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
    console.log(pairedWeatherInfo);
      
};

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
