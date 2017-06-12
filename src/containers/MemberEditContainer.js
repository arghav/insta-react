import React, { Component } from 'react';
import { connect } from 'react-redux';

import { hideEditView } from '../actions/members';

import Header from '../components/Header';
import MemberEdit from '../components/MemberEdit';

import './MemberEditContainer.css';

class MemberEditContainer extends Component {
  render() {
    return (
      <div className="MemberEditContainer">
        <div className="action-area">
          <div className="button" onClick={this.props.onCloseClick}>x</div>
        </div>
        <Header title="Add a team member" subtitle="Set email, location, and role"/>
        <MemberEdit member={this.props.item}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    item: state.members.selectedItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCloseClick: () => {
      dispatch(hideEditView());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MemberEditContainer);
