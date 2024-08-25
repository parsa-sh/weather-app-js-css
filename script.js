const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const apiKey = "b88589e8855e73baaa1cc2ca7449f2ef"
const searchBox = document.getElementById("search-box");
const searchBtn = document.getElementById("search-btn");
const weatherIcon = document.getElementById("weather-icon");
const weatherBox = document.getElementById("weather");

async function checkweather(city){
    let response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data =await response.json();
    weatherBox.style.display ="block";
    document.getElementById("city").innerHTML=data.name;
    document.getElementById("degree").innerHTML=Math.round(data.main.temp) + " °C";
    document.getElementById("wind").innerHTML=Math.round(data.wind.speed) + " km/h";
    document.getElementById("humidity").innerHTML=Math.round(data.main.humidity) + " %";


    if(data.weather[0].main = "clear"){
        weatherIcon.src="media/sun.png"
   
    } else if(data.weather[0].main = "clouds"){
        weatherIcon.src="media/clouds.png"
   
    } else if(data.weather[0].main ="rain"){
        weatherIcon.src="media/rain.png"
    
    } else if(data.weather[0].main = "drizzle"){
        weatherIcon.src="media/drizzle.png"
    
    } else if(data.weather[0].main = "mist"){
        weatherIcon.src="media/mist.png"
   
    } else if(data.weather[0].main = "snow"){
        weatherIcon.src="media/snow.png"
    }
}

searchBtn.addEventListener("click",()=>{
    checkweather(searchBox.value)
})




