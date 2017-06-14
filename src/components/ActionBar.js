import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

ActionBar.propTypes = {
  buttonText: PropTypes.string.isRequired,
  actionHandler: PropTypes.func.isRequired,
};

export default ActionBar;
