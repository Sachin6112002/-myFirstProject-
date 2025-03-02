const apikey = "d3682e312fecbb12a415c4b44fdbead9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatheraIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apikey}`);
  if(response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector("#weather").style.display = "none";
  }
else{ var data = await response.json();
  

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML =
    Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  if (data.weather[0].main == "Cloud") {
    weatheraIcon.src = "assests/cloud.png";
  } else if (data.weather[0].main == "Clear") {
    weatheraIcon.src = "assests/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weatheraIcon.src = "assests/rain.png";
  } else if (data.weather[0].main == "Mist") {
    weatheraIcon.src = "assests/mist.png";
  }
  
  document.querySelector("#weather").style.display = "flex";
  document.querySelector(".error").style.display = "none";
}
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value.trim());
});
