let city = "Bangkok";
const apiKey = "a140ba932db1a5395f41c67b9e8c376b";

const form = document.getElementById("form");
const search = document.getElementById("search");

function setData() {
  showWeather();
}

async function showWeather() {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const result = await fetch(url).then((response) => response.json());
    console.log(result);
    showDataUI(result);
  } catch (e) {
    console.log(error);
  }
}

function showDataUI(data) {
  const city = document.getElementById("city");
  const state = document.getElementById("state");
  const weather = document.getElementById("weather");
  const status = document.getElementById("status");
  const humidity = document.getElementById("humidity");
  const wind = document.getElementById("wind");

  city.innerText = data.name;
  state.innerText = data.sys.country;
  weather.children[0].innerText = calculate(parseInt(data.main.temp)) + " °C";
  weather.children[1].innerText =
    "min :  " +
    calculate(parseInt(data.main.temp_min)) +
    " °C" +
    "  |  max :  " +
    calculate(parseInt(data.main.temp_min)) +
    " °C";
  status.innerText = data.weather[0].main;
  humidity.innerText = "Humidity  " + data.main.humidity;
  wind.innerText = "Wind  " + data.wind.speed + "  km/h";
}

function calculate(k) {
  return k - 273;
}

function callDataAPI(e) {
  e.preventDefault();
  city = search.value;
  showWeather();
}

form.addEventListener("submit", callDataAPI);

setData();
