import React, { Component } from "react";


class SearchComp extends Component {
  render() {
    return (


<header className="SearchBar">
             
            <form action="printText(this.value)">
             <input id="CITYid" type="text" id="city" name="city" placeholder="London"/>
            
            <button type="Submit" > FIND WEATHER</button>
            </form>
            
         </header>
   
    );
  }
}

export default SearchComp;

