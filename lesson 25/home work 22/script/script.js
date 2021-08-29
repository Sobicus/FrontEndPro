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
  let html = wetherTemplate.innerHTML.replace("{{name}}", data.name);
    html = html.replace("{{lon}}", data.coord.lon);
    html = html.replace("{{lat}}", data.coord.lat);
    html = html.replace("{{main}}", data.weather[0].main);
    html = html.replace("{{icon}}", data.weather[0].icon);
    html = html.replace("{{description}}", data.weather[0].description);
    html = html.replace("{{temp}}", data.main.temp);
    html = html.replace("{{feels_like}}", data.main.feels_like);
    html = html.replace("{{temp_min}}", data.main.temp_min);
    html = html.replace("{{temp_max}}", data.main.temp_max);
    html = html.replace("{{humidity}}", data.main.humidity);
    html = html.replace("{{speed}}", data.wind.speed);
    html = html.replace("{{sunrise}}", Date(data.sys.sunrise));
    html = html.replace("{{sunset}}", Date(data.sys.sunset));
    

    weatherContainer.insertAdjacentHTML("beforeend", html);
}