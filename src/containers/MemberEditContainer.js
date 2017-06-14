import React, { Component } from 'react';
import { connect } from 'react-redux';

import { hideEditView, updateSelectedItemValue, addMember, updateMember, deleteMember, showEditError } from '../actions/members';

import Header from '../components/Header';
import MemberEdit from '../components/MemberEdit';

import './MemberEditContainer.css';

class MemberEditContainer extends Component {
  render() {
    const headerTitle = this.props.index === null ? 'Add a team member' : 'Edit a team member' ;
    return (
      <div className="MemberEditContainer">
        <div className="MemberEditContainer-action-area">
          <div className="button" onClick={this.props.onCloseClick}>x</div>
        </div>
        <Header title={headerTitle} subtitle="Set name, email, and role" />
        <MemberEdit
          item={this.props.item}
          index={this.props.index}
          handleInputChange={this.props.handleInputChange}
          handleIsAdminToggle={this.props.handleIsAdminToggle}
          onSaveClick={this.props.onSaveClick}
          onDeleteClick={this.props.onDeleteClick}
          editError={this.props.editError} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    item: state.members.selectedItem.data,
    index: state.members.selectedItem.index,
    editError: state.members.editError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCloseClick: () => {
      dispatch(hideEditView());
    },

    handleInputChange: (event) => {
      const target = event.target;
      const name = target.name;
      const value = target.value;

      dispatch(updateSelectedItemValue(name, value));
    },

    handleIsAdminToggle: (isAdmin) => {
      dispatch(updateSelectedItemValue('isAdmin', isAdmin));
    },

    onSaveClick: (item, index) => {
      if (item.firstName && item.lastName && item.email && item.phone && null !== item.isAdmin) {
        if (index !== null) {
          // existing item
          dispatch(updateMember(item, index));
        } else {
          // new item
          dispatch(addMember(item, index));
        }
        dispatch(hideEditView());
      } else {
        dispatch(showEditError('Please fill all fields'));
      }
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
