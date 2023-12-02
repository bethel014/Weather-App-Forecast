let weatherForm = document.querySelector("#weather-form");
weatherForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#weather-input");

  let cityInput = document.querySelector("#city");
  console.log(cityInput);
  cityInput.innerHTML = searchInput.value;
}
