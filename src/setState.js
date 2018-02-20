
import React, { Component } from 'react';

//inject this component into your application. 
//look at the console logs when you click on the buttons - they are incorrect. 
//move the console logs to the proper lifecycle method to correctly reflect the
//state

export default class LightSwitch extends Component {

  constructor(){
    super()
    this.state = {
      lightsOn:true
    };

    this.handleOnButtonClick = this.handleOnButtonClick.bind(this);
    this.handleOffButtonClick = this.handleOffButtonClick.bind(this);
  }

  handleOffButtonClick(){
    //console.log('state: ' + this.state.lightsOn)
    this.setState({
      lightsOn:false
    });
  }

  handleOnButtonClick(){
    //console.log('state: ' + this.state.lightsOn)
    this.setState({
      lightsOn: true
    });

  }

  render(){
    console.log('state: ' + this.state.lightsOn)
    return(
      <div>
        <button onClick={this.handleOnButtonClick}>
          On
        </button>
        <button onClick={this.handleOffButtonClick}>
          Off
        </button>
      </div>
    );
  }
}
