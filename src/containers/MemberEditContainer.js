import React, { Component } from 'react';
import { connect } from 'react-redux';

import { hideEditView, updateSelectedItemValue, addMember, updateMember, deleteMember } from '../actions/members';

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
        <Header title="Add a team member" subtitle="Set email, location, and role" />
        <MemberEdit item={this.props.item} index={this.props.index}
          handlInputChange={this.props.handlInputChange}
          handleIsAdminToggle={this.props.handleIsAdminToggle}
          onSaveClick={this.props.onSaveClick}
          onDeleteClick={this.props.onDeleteClick} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    item: state.members.selectedItem.data,
    index: state.members.selectedItem.index,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCloseClick: () => {
      dispatch(hideEditView());
    },
    handlInputChange: (event) => {
      const target = event.target;
      const name = target.name;
      const value = target.value;

      dispatch(updateSelectedItemValue(name, value));
    },
    handleIsAdminToggle: (isAdmin) => {
      dispatch(updateSelectedItemValue('isAdmin', isAdmin));
    },
    onSaveClick: (item, index) => {
      if (index !== null) {
        // existing item
        dispatch(updateMember(item, index));
      } else {
        // new item
        dispatch(addMember(item, index));
      }
      dispatch(hideEditView());
    },
    onDeleteClick: (index) => {
      dispatch(deleteMember(index));
      dispatch(hideEditView());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MemberEditContainer);
