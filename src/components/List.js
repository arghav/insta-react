import React, { Component } from 'react';
import './List.css';

import ListItem from '../components/ListItem';

class List extends Component {
  render() {
    return (
      <div className="List">
        <ListItem name="Joe" phone="234234324" email="joe@gmail.com" isAdmin="true"  />
        <ListItem name="Jane" phone="43778236423" email="Jane@gmail.com" isAdmin="false"  />
      </div>
    );
  }
}

export default List;
