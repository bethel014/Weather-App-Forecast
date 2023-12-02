let weatherForm = document.querySelector("#weather-form");
weatherForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#weather-input");
  let city = searchInput.value;
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
