import React, { Component } from "react";

import fakeWeatherData from "./fakeWeatherData.json";
import SearchComp from './components/SearchComp'

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
state = {
  searchbar: [
    {
      id: 1,
      title: "london",
    },
    {
      id: 2,
      title: "FIND WEATHER",
    }
    
  ]
}




  render() {
    return (
<div className="app">


  <SearchComp />
    <header className="SearchBar">
            <h3> london </h3>
            <button> FIND WEATHER</button>
         </header>
   
    <div className="main">
      <div className="Current">
       <img src="http://placekitten.com/130/130"/>  
      
       
       <h3>  overcast clouds</h3>
       
       <h3 class="CurrentTemp"> Temperature 10° to 11°C</h3>
       <div class="CurrentDetails">
       <h4> Humidity </h4>
       <h4> 78% </h4>
       <h4> Pressure </h4>
       <h4> 1008.48 </h4>
       </div>
       </div>

       <div className="nextHrs">
         <div className="time">
<h5> 03:00 </h5>
<h5> 06:00 </h5>
<h5> 09:00 </h5>
<h5> 12:00 </h5>
<h5> 15:00 </h5>
<h5> 18:00 </h5>
<h5> 21:00 </h5>
</div>
<div className="icons">

<img src="http://placekitten.com/50/50"/> 
<img src="http://placekitten.com/50/50"/> 
<img src="http://placekitten.com/50/50"/> 
<img src="http://placekitten.com/50/50"/> 
<img src="http://placekitten.com/50/50"/> 
<img src="http://placekitten.com/50/50"/> 
<img src="http://placekitten.com/50/50"/> 

</div>
<div className="degrees">
<h5> 8°C</h5>
<h5> 9°C</h5>
<h5> 14°C</h5>
<h5> 17°C</h5>
<h5> 18°C</h5>
<h5> 16°C</h5>
<h5> 13°C</h5>
</div>
</div>
</div>

    
</div>
    );
  }
}






export default App;


