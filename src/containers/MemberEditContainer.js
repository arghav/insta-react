import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as MembersActionCreators from '../actions/members';

import ActionBar from '../components/ActionBar';
import Header from '../components/Header';
import MemberEdit from '../components/MemberEdit';

import './MemberEditContainer.css';

class MemberEditContainer extends Component {
  render() {
    let { item, index, editError, dispatch } = this.props;
    let boundMembersActionCreators = bindActionCreators(MembersActionCreators, dispatch);

    const headerTitle = this.props.index === null ? 'Add a team member' : 'Edit a team member' ;

    return (
      <div className="MemberEditContainer">
        <ActionBar buttonText="x" actionHandler={boundMembersActionCreators.hideEditView}/>
        <Header title={headerTitle} subtitle="Set name, email, and role" />
        <MemberEdit
          item={item}
          index={index}
          editError={editError}
          {...boundMembersActionCreators} />
      </div>
    );
  }
}

export default connect(
  state => ({
    item: state.members.selectedItem.data,
    index: state.members.selectedItem.index,
    editError: state.members.editError,
  }),
)(MemberEditContainer);
