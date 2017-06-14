import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as MembersActionCreators from '../actions/members';

import Header from '../components/Header';
import MemberList from '../components/MemberList';

import './MemberListContainer.css';

class MemberListContainer extends Component {
  handleAddMember = (event) => {
    event.preventDefault();
    const { dispatch } = this.props;
    const itemEmptyState = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      isAdmin: false,
    };

    dispatch(MembersActionCreators.showEditView(itemEmptyState, null));
  }

  render() {
    const { dispatch } = this.props;
    let boundMembersActionCreators = bindActionCreators(MembersActionCreators, dispatch);

    const subtitle = `You have ${this.props.items.length} team member${this.props.items.length === 1 ? '' : 's'}`;

    return (
      <div className="MemberListContainer">
        <div className="MemberListContainer-action-area">
          <div className="button" onClick={this.handleAddMember}>+</div>
        </div>
        <Header title="Team members" subtitle={subtitle}/>
        <MemberList items={this.props.items} {...boundMembersActionCreators}/>
      </div>
    );
  }
}

export default connect(
  state => ({
    items: state.members.items,
  }),
)(MemberListContainer);
