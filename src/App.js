import React, { Component } from "react";
import FakeWeather from "./data/fakeWeather.json";
import fakeWeatherData from "./fakeWeatherData.json";
import SearchComp from './components/SearchComp'
import CurrentComp from './components/CurrentComp'
import Next24Comp from './components/Next24Comp'


import "./App.css";

import clear from "./img/weather-icons/clear.svg";
import storm from "./img/weather-icons/storm.svg";
import cloudy from "./img/weather-icons/cloudy.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import fog from "./img/weather-icons/fog.svg";
import mostlyCloudy from "./img/weather-icons/mostlycloudy.svg";
import partlyCloudy from "./img/weather-icons/partlycloudy.svg";
import rain from "./img/weather-icons/rain.svg";
import snow from "./img/weather-icons/snow.svg";
import unknown from "./img/weather-icons/unknown.svg";





// CITYid= document.getElementById('CityID').value; 


// function printText(){

//   var cityID = document.getElementById('CITYid').value;
  
//  return (cityID);
//  }



// function WeatherData( cityID ) {
  
//   fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + cityID+ '&cnt=8&units=metric&appid=1dbfddeb4930b11a6dad4caf4b57c7b3')  
   
//   .then(function(data) {
//     console.log(data);
//   })
//   .catch(function() {
    
//   });
// }





class App extends Component {



  render() {
    return (

<div className="app">

   <SearchComp />

   
   <CurrentComp 

    status={fakeWeatherData.list[4].weather[0].description}
    src={cloudy}
    tempmin={fakeWeatherData.list[4].main.temp_min}
    tempmax={fakeWeatherData.list[4].main.temp_max}
    humidity={fakeWeatherData.list[4].main.humidity}
    pressure={fakeWeatherData.list[4].main.pressure}/>


   <Next24Comp

   
   src3={rain}
   temp3={fakeWeatherData.list[5].main.temp}
   src6={rain}
   temp6={fakeWeatherData.list[6].main.temp}
   src9={rain}
   temp9={fakeWeatherData.list[7].main.temp}
   src12={rain}
   temp12={fakeWeatherData.list[8].main.temp}
   src15={rain}
   temp15={fakeWeatherData.list[9].main.temp}
   src18={rain}
   temp18={fakeWeatherData.list[10].main.temp}
   src21={rain}
   temp21={fakeWeatherData.list[11].main.temp}
  
   />
    
</div>

    );
  }
}

export default App;


