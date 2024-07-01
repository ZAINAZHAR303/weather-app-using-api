let url= "http://api.weatherapi.com/v1/current.json?key=36717966e1d6486e88452016240107&q="
let city = document.querySelector('.name');
let form = document.querySelector("form");
let temperature = document.querySelector('.temperature');
let description = document.querySelector('.description');
let valueSearch = document.getElementById('name');
let clouds = document.getElementById('clouds');
let humidity = document.getElementById('humidity');
let pressure = document.getElementById('pressure');
let main = document.querySelector('main');

form.addEventListener("submit" ,(e) =>{
    e.preventDefault();
    if(valueSearch.value != ""){
        
        api();
    }
});






function api(){
    fetch(url+ valueSearch.value)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.querySelector("figcaption").innerText = data.location.name;
        temperature.querySelector('img').src  = data.current.condition.icon;
        temperature.querySelector('span').innerText=data.current.temp_c;
        document.querySelector(".region").innerText = data.location.region;
        description.innerText = data.current.condition.text;
        clouds.innerText=data.current.cloud;

        humidity.innerText= data.current.humidity;
        pressure.innerText = data.current.pressure_mb;
        document.getElementById("wind").innerText=data.current.wind_kph;
        document.getElementById("heat").innerText = data.current.heatindex_c;

    });
}

const initApp = () => {
    valueSearch.value = 'Washington';
    api();
}
initApp();
