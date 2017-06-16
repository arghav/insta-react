import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './MemberEdit.css';

class MemberEdit extends Component {
  handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;

    let value = target.value;
    if ('isAdmin' === name) {
      value = 'true' === value ? true : false;
    }

    this.props.updateSelectedItemValue(name, value);
  }

  saveHandler = (event) => {
    event.preventDefault();

    const { item, index } = this.props;
    if (item.firstName && item.lastName && item.email && item.phone && null !== item.isAdmin) {
      if (index !== null) {
        // existing item
        this.props.updateMember(item, index);
      } else {
        // new item
        this.props.addMember(item, index);
      }
      this.props.hideEditView();
    } else {
      this.props.showEditError('Please fill all fields');
    }
  };

  deleteHandler = (event) => {
    event.preventDefault();
    const index = this.props.index;

    this.props.deleteMember(index);
    this.props.hideEditView();
  };

  render() {
    return (
      <div className="MemberEdit">
        <form>
          <div className="header">Info</div>
          <input
            type="text" placeholder="First name"
            name="firstName"
            value={this.props.item.firstName}
            onChange={this.handleInputChange} />
          <input
            type="text" placeholder="Last name"
            name="lastName"
            value={this.props.item.lastName}
            onChange={this.handleInputChange} />

          <input
            type="text" placeholder="e-Mail"
            name="email"
            value={this.props.item.email}
            onChange={this.handleInputChange} />

          <input
            type="text" placeholder="Phone #"
            name="phone"
            value={this.props.item.phone}
            onChange={this.handleInputChange} />

          <div className="radio-option">
            <input type="radio" value={false} name="isAdmin" id="isAdminOptionNo"
              onChange={this.handleInputChange} checked={!this.props.item.isAdmin} />
              <label htmlFor="isAdminOptionNo">Regular – Can't delete members</label>
          </div>
          <div className="radio-option">
            <input type="radio" value={true} name="isAdmin" id="isAdminOptionYes"
              onChange={this.handleInputChange} checked={this.props.item.isAdmin} />
              <label htmlFor="isAdminOptionYes">Admin – Can delete members</label>
          </div>

          { this.props.editError && <div className="error">{this.props.editError}</div> }
          <div className="actions">
            <a className="primary" onClick={this.saveHandler}>Save</a>
            <a className="secondary" onClick={this.deleteHandler}>Delete</a>
          </div>
        </form>
      </div>
    );
  }
}

MemberEdit.propTypes = {
  index: PropTypes.number,
  item: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    isAdmin: PropTypes.bool.isRequired,
  }).isRequired,
  updateSelectedItemValue: PropTypes.func.isRequired,
  addMember: PropTypes.func.isRequired,
  updateMember: PropTypes.func.isRequired,
  deleteMember: PropTypes.func.isRequired,
  showEditError: PropTypes.func.isRequired,
  hideEditView: PropTypes.func.isRequired,
};

export default MemberEdit;
