
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const coords = position.coords;
            const currentLat = position.latitude;
            const currentLong = position.longitude;
            console.log(currentLat, currentLong);
      });
    } else {
       console.log("Geolocation is not supported by this browser.");
    }
  