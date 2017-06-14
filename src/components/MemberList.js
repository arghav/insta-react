import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './MemberList.css';

class MemberList extends Component {
  handleEditItem = (index) => {
    // Using index of the array for simplicity. Should not be used for production apps.
    const { items } = this.props;

    this.props.showEditView(items[index], index);
  }

  render() {
    const listItems = this.props.items.map((item, index) => (
      <div className="MemberList-item" key={index} onClick={this.handleEditItem.bind(this, index)}>
        <div className="avatar"><img src="http://via.placeholder.com/100x100" alt="avatar" /></div>
        <div className="info">
          <div className="name">{item.firstName + ' ' + item.lastName}&nbsp;{ true === item.isAdmin && <span>(admin)</span>}</div>
          <div className="phone">{item.phone}</div>
          <div className="email">{item.email}</div>
        </div>
      </div>
    ));

    return (
      <div className="MemberList">
        {listItems}
      </div>
    );
  }
}

MemberList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      isAdmin: PropTypes.bool.isRequired,
    })
  ).isRequired,
  showEditView: PropTypes.func.isRequired,
};

export default MemberList;
