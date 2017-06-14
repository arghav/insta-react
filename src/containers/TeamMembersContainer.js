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

const mapStateToProps = (state) => {
  return {
    isEditing: state.members.isEditing,
  };
};

export default connect(
  mapStateToProps,
)(TeamMembersContainer);
