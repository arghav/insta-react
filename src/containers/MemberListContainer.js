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
      <div className="MemberListContainer">ot
        <div className="action-area">
          <div className="button" onClick={this.props.onMemberClick}>+</div>
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
    onItemClick: (item) => {
      dispatch(showEditView(item));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MemberListContainer);
