let weatherForm = document.querySelector("#weather-form");
weatherForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#weather-input");
  displayCity(searchInput.value);
}

function displayCity(city) {
  let apiKey = "8fa2ab32e21db893o44btbabb185f06b";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiUrl).then(displayCurrentTemp);
}

function displayCurrentTemp(response) {
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;

  let countryElement = document.querySelector("#country");
  countryElement.innerHTML = response.data.country;

  let temperature = document.querySelector("#weather-value");
  temperature.innerHTML = Math.round(response.data.temperature.current);

  let humidityElement = document.querySelector("#value");
  humidityElement.innerHTML = `${response.data.temperature.humidity} %`;

  let windElement = document.querySelector("#wind");
  windElement.innerHTML = `${Math.round(response.data.wind.speed)} km/hr`;

  let condition = document.querySelector(".weatherDetail");
  condition.innerHTML = response.data.condition.description;

  let degree = document.querySelector(".deg");
  degree.innerHTML = "℃";

  let weatherIcon = document.querySelector(".icon");
  weatherIcon.innerHTML = `<img src="${response.data.condition.icon_url}" class ="weather-app-icon" />`;
}

let currentDate = new Date();

let minute = currentDate.getMinutes();
let hour = currentDate.getHours();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[currentDate.getDay()];

if (minute < 10) {
  minute = `0${minute}`;
}
if (hour < 10) {
  hour = `0${hour}`;
}

let weatherDate = document.querySelector("#current-date");
weatherDate.innerHTML = `${day} ${hour} : ${minute} ,`;

function getForecast(city) {
  let apiKey = "8fa2ab32e21db893o44btbabb185f06b";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(showForecast);
}

function showForecast(response) {
  let forecastHtml = "";

  response.data.daily.forEach(function (day, index) {
    if (index > 0 && index < 6) {
      forecastHtml =
        forecastHtml +
        ` <div class="forecast">
          <span class="forecast-day">${forecastDate(day.time)}</span>
          <br />
          <span >
          <img src = "${day.condition.icon_url}" class="forecast-icon" >
          </span>
          <br />
          <span class="max"><strong>${Math.round(
            day.temperature.maximum
          )}°</strong></span>
          <span class="min">${Math.round(day.temperature.minimum)}°</span>
        </div>`;
    }
  });
  let forecast = document.querySelector("#forecast");
  forecast.innerHTML = forecastHtml;
}

displayCity("Asaba");
