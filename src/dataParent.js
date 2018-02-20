import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Table } from 'reactstrap';
import TodaysWind from './windSpeed.js';
import TodaysWeather from './cityTemp.js';
import TodaysHumidity from './cityHumid.js';

export default class DataParent extends Component{
    constructor(props){
        super(props);
        this.state={
            data: {
                wind: {
                    speed: "loading...",
                    deg: "loading..."
                },
                main: {
                    temp: "loading...",
                    humidity: "loading..."
                },
                name: "loading..."
                }
        }
    }
    componentDidMount(){
        axios.get("http://api.openweathermap.org/data/2.5/weather?q=bozeman&APPID=deb29dfd065c544e4164e76b251706d3").then((response)=>{
            //convert response.data.main.temp
            response.data.main.temp = Math.floor(response.data.main.temp * (9/5) - 459.67)
            this.setState({
                data:response.data,
            })
        })
    }
    
    render(){
        return (
        <div>
        <TodaysWeather {...this.state.data}/>
        <TodaysWind {...this.state.data}/>
        <TodaysHumidity {...this.state.data}/>
        </div>
        )
    }
}
