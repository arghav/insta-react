import React, { Component } from 'react';
import './ListItem.css';

class ListItem extends Component {
  render() {
    return (
      <div className="ListItem" onClick={this.props.onClick}>
        <div className="name">{this.props.firstName + ' ' + this.props.lastName}{ "true" === this.props.isAdmin && <span>(admin)</span>}</div>
        <div className="phone">{this.props.phone}</div>
        <div className="email">{this.props.email}</div>
      </div>
    );
  }
}

export default ListItem;
