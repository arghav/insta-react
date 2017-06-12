import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import TeamMembersContainer from './containers/TeamMembersContainer';
import './index.css';

import configureStore from './store/configureStore';

const store = configureStore({
  members: {
    isFetching: false,
    isSaving: false,
    isDeleting: false,
    isEditing: false,

    items: [
      { id: 1, firstName: "Jone", lastName: "Doe", phone: 97234263423, email: "jone@doe.xyz", isAdmin: false },
      { id: 2, firstName: "Jane", lastName: "Doe", phone: 99373743333, email: "jane@doe.xyz", isAdmin: true },
    ],
    selectedItem: null,
  }
});

render(
  <Provider store={store}>
    <TeamMembersContainer />
  </Provider>
  , document.getElementById('root'));
