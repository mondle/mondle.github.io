const API_KEY = "223d8a385b2c4b47adcabc318ee6a799";
let weatherIcon = "climacon-cloud_moon.svg";

function onGeoOK(position) {
	const lat = position.coords.latitude;
	const long = position.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			const weather = document.querySelector(
				"#weather span:nth-child(2)"
			);
			const city = document.querySelector("#weather span:last-child");
			weatherIcon = getWeatherIcon(data.weather[0].id);
			city.innerText = data.name;
			weather.innerText = `(${Math.round(data.main.temp)}°C)`;
			putWeatherIcon();
		});
}
function onGeoError() {
	alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);

function putWeatherIcon() {
	const icon = document.createElement("img");
	icon.src = `icons/${weatherIcon}`;
	document.querySelector("#weather span:first-child").appendChild(icon);
}

function getWeatherIcon(weather) {
	if (weather < 300) {
		return "climacon-cloud_lightning.svg";
	} else if (weather < 700) {
		return "climacon-cloud_snow_alt.svg";
	} else if (weather == 800) {
		return "climacon-sun.svg";
	} else if (weather <= 804) {
		return "climacon-cloud_sun.svg";
	} else {
		return "climacon-cloud_moon.svg";
	}
}
