import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';


export default class ChildFile extends Component {
    // constructor(props){
    //     super(props)
    // }
  render() {
    return (
      <ListGroup>
        <ListGroupItem className="justify-content-between">{this.props[0].person} <Badge pill>{this.props[0].likesTacos}</Badge></ListGroupItem>
        <ListGroupItem className="justify-content-between">{this.props[1].person} <Badge pill>{this.props[1].likesTacos}</Badge></ListGroupItem>
        <ListGroupItem className="justify-content-between">{this.props[2].person} <Badge pill>{this.props[2].likesTacos}</Badge></ListGroupItem>
      </ListGroup>
    );
  }
}
