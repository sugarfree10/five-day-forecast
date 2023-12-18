

const apiKey = "93e2ae367c4f1218ca8ee3a345186cd5";
  



if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
        const coords = position.coords;
        const currentLat = coords.latitude;
        const currentLong = coords.longitude;
        console.log(currentLat, currentLong);
    });
} else {
    console.log("Geolocation is not supported by this browser.");
}
