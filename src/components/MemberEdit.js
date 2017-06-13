import React, { Component } from 'react';

import './MemberEdit.css';

class MemberEdit extends Component {
  render() {
    return (
      <div className="MemberEdit">
        <form>
          <div className="header">Info</div>
          <input
            type="text" placeholder="First name"
            name="firstName"
            value={this.props.item.firstName}
            onChange={this.props.handlInputChange} />
          <input
            type="text" placeholder="Last name"
            name="lastName"
            value={this.props.item.lastName}
            onChange={this.props.handlInputChange} />

          <input
            type="text" placeholder="e-Mail"
            name="email"
            value={this.props.item.email}
            onChange={this.props.handlInputChange} />

          <input
            type="text" placeholder="Phone #"
            name="phone"
            value={this.props.item.phone}
            onChange={this.props.handlInputChange} />

          <div className="radio-option">
            <input type="radio" value={false} name="isAdmin"
              onChange={() => this.props.handleIsAdminToggle(false)} checked={!this.props.item.isAdmin} />
              <label>Regular – Can't delete members</label>
          </div>
          <div className="radio-option">
            <input type="radio" value={true} name="isAdmin"
              onChange={() => this.props.handleIsAdminToggle(true)} checked={this.props.item.isAdmin} />
              <label>Admin – Can delete members</label>
          </div>

          { this.props.editError && <div className="error">{this.props.editError}</div> }
          <div className="actions">
            <a className="primary" onClick={(e) => { e.preventDefault(); this.props.onSaveClick(this.props.item, this.props.index); }}>Save</a>
            <a className="secondary" onClick={(e) => { e.preventDefault(); this.props.onDeleteClick(this.props.index); }}>Delete</a>
          </div>
        </form>
      </div>
    );
  }
}

export default MemberEdit;
