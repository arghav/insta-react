import React, { Component } from 'react';

class MemberEdit extends Component {
  render() {
    return (
      <div className="MemberEdit">
        <form>
          <input type="text" placeholder="First name" value={this.props.firstName}></input>
          <input type="text" placeholder="Last name" value={this.props.lastName}></input>
          <input type="text" placeholder="e-Mail" value={this.props.email}></input>
          <input type="text" placeholder="Phone #" value={this.props.phone}></input>
          <input type="radio" name="type" value="regular" checked={this.props.isAdmin} />Regular - Can't delete members
          <input type="radio" name="type" value="admin" /> Admin
        </form>
      </div>
    );
  }
}

export default MemberEdit;
