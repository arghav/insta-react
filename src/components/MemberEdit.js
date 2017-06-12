import React, { Component } from 'react';

class MemberEdit extends Component {
  render() {
    return (
      <div className="MemberEdit">
        <form>
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

          <input type="radio" value={false} name="isAdmin"
            onChange={() => this.props.handleIsAdminToggle(false)} checked={!this.props.item.isAdmin} />Regular - Can't delete members
          <input type="radio" value={true} name="isAdmin"
            onChange={() => this.props.handleIsAdminToggle(true)} checked={this.props.item.isAdmin} /> Admin

          <a onClick={(e) => { e.preventDefault(); this.props.onSaveClick(this.props.item, this.props.index); }}>Save</a>
          <a onClick={(e) => { e.preventDefault(); this.props.onDeleteClick(this.props.index); }}>Delete</a>
        </form>
      </div>
    );
  }
}

export default MemberEdit;
