import React, { Component } from 'react';
import './Team.css';

import Header from '../components/Header';

class Team extends Component {
  render() {
    return (
      <div className="Team">
        <Header title="Team members" subtitle="You have 3 team members"/>
        <div className="Team-items">
          <div className="item">
            <div className="name">Adrien Ociezk<span>(admin)</span></div>
            <div className="phone">415-310-1619</div>
            <div className="email">adien@instawork.com</div>
          </div>
          <div className="item">
            <div className="name">Adrien Ociezk<span>(admin)</span></div>
            <div className="phone">415-310-1619</div>
            <div className="email">adien@instawork.com</div>
          </div>
          <div className="item">
            <div className="name">Adrien Ociezk<span>(admin)</span></div>
            <div className="phone">415-310-1619</div>
            <div className="email">adien@instawork.com</div>
          </div>
          <div className="item">
            <div className="name">Adrien Ociezk<span>(admin)</span></div>
            <div className="phone">415-310-1619</div>
            <div className="email">adien@instawork.com</div>
          </div>
          <div className="item">
            <div className="name">Adrien Ociezk<span>(admin)</span></div>
            <div className="phone">415-310-1619</div>
            <div className="email">adien@instawork.com</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
