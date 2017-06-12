import React, { Component } from 'react';
import { connect } from 'react-redux';

import { showEditView } from '../actions/members';

import Header from '../components/Header';
import MemberList from '../components/MemberList';

import './MemberListContainer.css';

class MemberListContainer extends Component {
  render() {
    const subtitle = `You have ${this.props.items.length} team member${this.props.items.length === 1 ? '' : 's'}`;
    return (
      <div className="MemberListContainer">
        <div className="action-area">
          <div className="button" onClick={this.props.onAddMemberClick}>+</div>
        </div>
        <Header title="Team members" subtitle={subtitle}/>
        <MemberList items={this.props.items} onItemClick={this.props.onItemClick}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.members.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onItemClick: (item, index) => {
      dispatch(showEditView(item, index));
    },
    onAddMemberClick: () => {
      dispatch(showEditView({}, null));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MemberListContainer);
