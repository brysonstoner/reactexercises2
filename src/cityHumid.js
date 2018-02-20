import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Table } from 'reactstrap';
import DataParent from './dataParent.js';

export default class TodaysHumidity extends Component{
    constructor(){
        super();

    }
    render(){
        return(
        <div>
            Currently, the humidity is {this.props.main.humidity} units of humidity.
        </div>
        )
    }
}
