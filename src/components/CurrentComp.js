import React, { Component } from "react";


class CurrentComp extends Component {
  render() {
    return (


<div className="Current">

        <img src={this.props.src} alt="cloudy icon"/>
      
        <h3> {this.props.status}</h3>
        <h3 class="CurrentTemp"> Temperature {(this.props.tempmin-273.15).toFixed(0)} C to {(this.props.tempmax-273.15).toFixed(0)} C </h3>

        <div class="CurrentDetails">
        <h4> Humidity {this.props.humidity} % </h4>
       
        <h4> Pressure {this.props.pressure}</h4>
       
        </div>
        </div>

    );
  }
}






export default CurrentComp;
