const API_KEY = "9ef0baa12524dfb42d583d44f860bbd6";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`; // units=metric 섭씨온도 보여줌!
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const weatherForm = document.querySelector("#weather");
      const city = document.querySelector("#weather span:first-child");
      // const weather = document.querySelector("#weather span:nth-child(2)");
      const temp = document.querySelector("#weather span:last-child");
      const imgUrl =
        "https://openweathermap.org/img/w/" +
        `${data.weather[0].icon}` +
        ".png";
      const weatherImg = document.createElement("img");
      weatherImg.id = "weather_img";
      weatherImg.src = imgUrl;
      weatherForm.appendChild(weatherImg);
      city.innerText = ` ${data.name}`;
      // weather.innerText = `${data.weather[0].main}`;
      temp.innerText = `${Math.floor(data.main.temp)}℃`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you!");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
