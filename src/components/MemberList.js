import React, { Component } from 'react';
import './MemberList.css';

class Team extends Component {
  render() {
    const listItems = this.props.items.map((item, index) => (
      <div key={index} className="ListItem" onClick={() => this.props.onItemClick(item, index)}>
        <div className="name">{item.firstName + ' ' + item.lastName}{ "true" === item.isAdmin && <span>(admin)</span>}</div>
        <div className="phone">{item.phone}</div>
        <div className="email">{item.email}</div>
      </div>
    ));

    return (
      <div className="MemberList">
        {listItems}
      </div>
    );
  }
}

export default Team;
