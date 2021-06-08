import React, { Component } from "react";

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



class App extends Component {


// state = {
//   searchbar: [
//     {
//       id: 1,
//       title: "london",
//     },
//     {
//       id: 2,
//       title: "FIND WEATHER",
//     }
    
//   ]
// }



  render() {
    return (

<div className="app">

   <SearchComp />
    
   <CurrentComp/>

   <Next24Comp/>
    
</div>

    );
  }
}

export default App;


