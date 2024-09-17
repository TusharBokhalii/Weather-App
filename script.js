let SearchButton = document.getElementsByClassName("ri-search-line")[0];
let WeatherDetails = document.querySelector("main-top-degree");
let humidity = document.querySelector("per");
let WeatherSpeed = document.getElementsByClassName("speed")[0];


SearchButton.addEventListener('click',function(){
    let APIkey = '8d6769fc9608b61323bdb4e3e50bb397';
    let SearchCity = document.getElementById("Searchings").value;
    
    let images1  = document.getElementById("backgrounds")
    if(SearchCity == '')
        {return};
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${SearchCity}&units=metric&appid=${APIkey}`)
    .then(res => res.json())
    .then(json => {
        if(json.cod == 404){
            document.getElementsByClassName("first")[0].style.width = "100%"
            document.getElementsByClassName("not")[0].innerHTML = "<p>Not Found!!!</p>"
            document.getElementsByClassName("second-other-weather")[0].style.display = "none"
            document.getElementsByClassName("main-top-degree")[0].style.display = "none"
            images1.src = "404.png"
            document.getElementsByClassName("weather-city-name")[0].style.display = "none";
        }
        
        let Temprature  = document.getElementsByClassName("main-top-degree")[0]
        let humidity  = document.getElementsByClassName("per")[0]
        
      switch(json.weather[0].main){
        case 'Clear':
            images1.src = 'clear.png'
            break;

        case 'Rain':    
            images1.src = 'rain.png'
            break;
        
        case 'Snow':
            images1.src = 'snow.png'
            break;
        case 'Clouds':
            images1.src = 'cloud.png'
            break;
        case 'Mist':
            images1.src = 'mist.png'
            break;
        default:
        images1.src = "clear.png"
      }
      document.getElementsByClassName("weather-city-name")[0].innerHTML = SearchCity;

            Temprature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`
            humidity.innerHTML =   `${parseInt(json.main.humidity)}%`;
            WeatherSpeed.innerHTML =   `${parseInt(json.wind.speed)}Km/h`
            document.getElementsByClassName("weather-city-name")[0].style.display = "block";
            // document.getElementsByClassName("second-other-weather")[0].style.display = "block"
            document.getElementsByClassName("main-top-degree")[0].style.display = "block"
        
    })
    
})


