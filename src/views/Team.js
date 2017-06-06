import React, { Component } from 'react';
import './Team.css';

import Header from '../components/Header';
import List from '../components/List';

class Team extends Component {
  render() {
    return (
      <div className="Team">
        <Header title="Team members" subtitle="You have 3 team members"/>
        <List />
      </div>
    );
  }
}

export default Team;
