import React, { Component } from 'react';
import './Team.css';

import Header from '../components/Header';
import List from '../components/List';

class Team extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: false,
      isNew: false,
    };

    this.showNewMemberView = this.showNewMemberView.bind(this);
    this.closeTeamEditView = this.closeTeamEditView.bind(this);
  }

  showNewMemberView() {
    this.setState({ isEdit: true, isNew: true });
  }

  closeTeamEditView() {
    this.setState({ isEdit: false, isNew: false });
  }

  render() {
    let teamListView = (
      <div className="Team-list">
        <div className="action-area">
          <div className="button" onClick={this.showNewMemberView}>+</div>
        </div>
        <Header title="Team members" subtitle="You have 3 team members"/>
        <List />
      </div>
    );

    let teamEditView = (
      <div className="Team-edit">
        <div className="action-area">
          <div className="button" onClick={this.closeTeamEditView}>x</div>
        </div>
        <Header title="Add a team member" subtitle="Set email, location, and role"/>
        <div className="edit-area">
          <form>
            <input type="text" placeholder="First name"></input>
            <input type="text" placeholder="Last name"></input>
            <input type="text" placeholder="e-Mail"></input>
            <input type="text" placeholder="Phone #"></input>
            <input type="radio" name="type" value="regular" checked />Regular - Can't delete members
            <input type="radio" name="type" value="admin" /> Admin
          </form>
        </div>
      </div>
    );

    if (this.state.isEdit) {
      return teamEditView;
    } else {
      return teamListView;
    }
  }
}

export default Team;
