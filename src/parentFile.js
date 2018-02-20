import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';
import ChildFile from './listFile.js';

export default class ParentFile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[
            {
              person:"Tom Cruise",
              likesTacos:"no"
            }, 
            {
              person:"Andrew Jackson",
              likesTacos:"never knew what tacos were"
            },
            {
              person:"Rand Paul",
              likesTacos:"yes"
            }
        ]
        }
    }

    render(){
        return (
        <div>
        < ChildFile {...this.state.data} />
        </div>
        )}
}
