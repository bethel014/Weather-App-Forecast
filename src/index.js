let weatherForm = document.querySelector("#weather-form");
weatherForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#weather-input");
  console.log(searchInput);
}
