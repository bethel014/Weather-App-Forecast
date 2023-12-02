let weatherForm = document.querySelector("#weather-form");
weatherForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#weather-input");
  let cityInput = document.querySelector("#city");
  console.log(cityInput);
  cityInput.innerHTML = searchInput.value;
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
