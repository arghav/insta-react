import React, { Component } from 'react';
import './ListItem.css';

class ListItem extends Component {
  render() {
    return (
      <div className="List-item">
        <div className="name">{this.props.name}{ "true" === this.props.isAdmin && <span>(admin)</span>}</div>
        <div className="phone">{this.props.phone}</div>
        <div className="email">{this.props.email}</div>
      </div>
    );
  }
}

export default ListItem;
