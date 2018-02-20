import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Table } from 'reactstrap';
import DataParent from './dataParent.js';

export default class TodaysWeather extends Component{
    constructor(){
        super();

    }
    render(){
        return(
        <div>
            <div>
                The weather in {this.props.name}:
            </div>
            Today the temperature is {this.props.main.temp} degrees F.
        </div>
        )
    }
}
