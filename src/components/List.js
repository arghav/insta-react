import React, { Component } from 'react';
import './List.css';

import ListItem from '../components/ListItem';

class List extends Component {
  render() {
    const listItems = this.props.items.map((item) =>
      <ListItem key={item.id} firstName={item.firstName} lastName={item.lastName} phone={item.phone} email={item.email} isAdmin={item.isAdmin}
        onClick={() => this.props.onItemClick(item)}
      />
    );

    return (
      <div className="List">
        {listItems}
      </div>
    );
  }
}

export default List;
