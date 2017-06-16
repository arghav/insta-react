import React, { Component } from 'react';
import { connect } from 'react-redux';
import MemberListContainer from './MemberListContainer';
import MemberEditContainer from './MemberEditContainer';

import './TeamMembersContainer.css';

class TeamMembersContainer extends Component {
  render() {
    return (
      <div className="TeamMembersContainer">
        {this.props.isEditing ? <MemberEditContainer/> : <MemberListContainer/>}
      </div>
    );
  }
}

export default connect(
  (state) => ({
    isEditing: state.members.isEditing,
  }),
)(TeamMembersContainer);
