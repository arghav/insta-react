import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header-title">{this.props.title}</div>
        <div className="Header-subtitle">{this.props.subtitle}</div>
      </div>
    );
  }
}

export default Header;
