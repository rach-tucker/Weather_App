{
    const form = document.getElementById('weatherForm');

    form.addEventListener('submit', handleFormSubmit);
    
    async function handleFormSubmit(e){
        e.preventDefault(); 
        let cityName = e.target.cityName.value;
        let data = await getWeatherData(cityName);
        displayWeather(data);
        e.target.cityName.value = '';
    };


    async function getWeatherData(cityName){
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${myAPIkey}&units=imperial`);
        let data = await response.json();
        return data
    }


    function displayWeather(data){
        const { name } = data;
        const { temp } = data.main;
        const { icon, description } = data.weather[0];
        const { temp_max } = data.main;
        const { temp_min } = data.main;
        const { feels_like } = data.main;
        console.log(name, temp, icon, description, temp_max, temp_min, feels_like);
        document.getElementById("name").innerText = name;
        document.getElementById("icon").src = "https://openweathermap.org/img/wn/"+ icon + ".png";
        document.getElementById("description").innerText = description;
        document.getElementById("temp").innerText = `The current temperature in ${name} is  ${temp}°F`;
        document.getElementById("temp_max").innerText = `The high for today is ${temp_max}°F`;
        document.getElementById("temp_min").innerText = `The low for today is ${temp_min}°F`;
        document.getElementById("feels_like").innerText = `It feels like ${feels_like}`;
        document.getElementById("displayWeather").hidden = false;
    }



}
