const inputBox = document.querySelector('.input-box'); // Use querySelector for single elements
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img'); // Use querySelector for single elements
const cityElement = document.querySelector('.city'); // Use querySelector for single elements
const temperature = document.querySelector('.temperature');
const wind_speed = document.querySelector('.wind-speed'); // Include dot for class name
const humidity = document.querySelector('.humidity'); // Include dot for class name


async function checkWeather(city) {
    const api_key = "8e353561b261ce3da76cdbb8a33e4ec4";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(url).then(response => response.json());

    if(weather_data.cod === `404`){
        
        weather.style.display = "none";
        console.log("error");
        return;
    }

    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    wind_speed.innerHTML = `${weather_data.wind.speed} Km/H`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    cityElement.innerHTML = `${weather_data.name}`; 

    
    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "cloud.png";
            break;
        case 'Clear':
            weather_img.src = "sun-icon.png";
            break;
        case 'Rain':
            weather_img.src = "rain.jpg";
            break;
        case 'Mist':
            weather_img.src = "mist.png";
            break;
        case 'Snow':
            weather_img.src = "snow.jpg";
            break;

    }


    console.log(weather_data);
}

searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
});


