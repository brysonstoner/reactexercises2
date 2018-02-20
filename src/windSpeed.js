import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Table } from 'reactstrap';
import DataParent from './dataParent.js';

export default class TodaysWind extends Component{
    constructor(){
        super();
    }
    render(){
        return(
        <div>
            The wind speed is {this.props.wind.speed} MPH.
        </div>
        )
    }
}
