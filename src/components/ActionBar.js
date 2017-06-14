import React, { Component } from 'react';
import './ActionBar.css';

class ActionBar extends Component {
  render() {
    return (
      <div className="ActionBar">
        <div className="button" onClick={this.props.actionHandler}>{this.props.buttonText}</div>
      </div>
    );
  }
}

export default ActionBar;
