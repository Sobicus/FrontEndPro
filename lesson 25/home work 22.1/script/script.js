let btn = document.querySelector(".buttonWether");

function onClickHandler() {
  let city = document.querySelector(".inputCity").value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ff6b131267e089bb61aeabb452d8ba34`
  )
    .then((res) => res.json())
    .then((data) => addWeatherFields(data))
    .catch((error) => console.log(error))
    .finally(clearInput);
}

function clearInput() {
  document.querySelector(".inputCity").value = "";
}

btn.addEventListener("click", onClickHandler);

function addWeatherFields(data) {
  document.querySelector('.title').textContent = data.name;
  document.querySelectorAll('.completed')[0].textContent = data.coord.lon +"°";
  document.querySelectorAll('.completed')[1].textContent = data.coord.lat +"°";
  document.querySelectorAll('.completed')[2].innerHTML = data.weather[0].main +  `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;
  document.querySelectorAll('.completed')[3].textContent = data.weather[0].description;
  document.querySelectorAll('.completed')[4].textContent = data.main.temp +"℃";
  document.querySelectorAll('.completed')[5].textContent = data.main.feels_like +"℃";
  document.querySelectorAll('.completed')[6].textContent = data.main.temp_min +"℃";
  document.querySelectorAll('.completed')[7].textContent = data.main.temp_max +"℃";
  document.querySelectorAll('.completed')[8].textContent = data.main.humidity +"%";
  document.querySelectorAll('.completed')[9].textContent = data.wind.speed +" meter/sec";
  document.querySelectorAll('.completed')[10].textContent = Date(data.sys.sunrise);
  document.querySelectorAll('.completed')[11].textContent = Date(data.sys.sunset);
}