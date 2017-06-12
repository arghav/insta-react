import React, { Component } from 'react';
import './MemberList.css';

import List from '../components/List'

class Team extends Component {
  render() {
    return (
      <div className="MemberList">
        <List items={this.props.items} onItemClick={this.props.onItemClick}/>
      </div>
    );
  }
}

export default Team;
