import React, { Component } from "react";

class Next24Comp extends Component {
  render() {
    return (



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


<img src={this.props.src3} alt="rain icon"/>
<img src={this.props.src6} alt="rain icon"/>
<img src={this.props.src9} alt="rain icon"/>
<img src={this.props.src12} alt="rain icon"/>
<img src={this.props.src15} alt="rain icon"/>
<img src={this.props.src18} alt="rain icon"/>
<img src={this.props.src21} alt="rain icon"/>

</div>
<div className="degrees">
<h5> {(this.props.temp3-273.15).toFixed(0)} C </h5>
<h5> {(this.props.temp6-273.15).toFixed(0)} C  </h5>
<h5> {(this.props.temp9-273.15).toFixed(0)} C </h5>
<h5> {(this.props.temp12-273.15).toFixed(0)} C </h5>
<h5> {(this.props.temp15-273.15).toFixed(0)} C </h5>
<h5> {(this.props.temp18-273.15).toFixed(0)} C </h5>
<h5> {(this.props.temp21-273.15).toFixed(0)} C </h5>
</div>
</div>



    );
  }
}


export default Next24Comp;
