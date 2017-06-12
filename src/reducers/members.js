import {
  REQUEST_MEMBERS, RECEIVE_MEMBERS,
  REQUEST_SAVE, RECEIVE_SAVE,
  REQUEST_DELETE, RECEIVE_DELETE,
  SHOW_EDIT_VIEW, HIDE_EDIT_VIEW,
} from '../actions/members';

export default (state = {
  // view context
  isFetching: false,
  isSaving: false,
  isDeleting: false,
  isEditing: false,

  // data context
  items: [],
  selectedItem: null, // If selectedItem is null and isEditing = true then consider it as a new item
}, action) => {
  switch (action.type) {
    case REQUEST_MEMBERS:
      return Object.assign({}, state, { isFetching: true })
    case RECEIVE_MEMBERS:
      return Object.assign({}, state, { isFetching: false, items: action.members });
    case REQUEST_SAVE:
      return Object.assign({}, state, { isSaving: true })
    case RECEIVE_SAVE:
      return Object.assign({}, state, { isSaving: false, items: action.member });
    case REQUEST_DELETE:
      return Object.assign({}, state, { isFetching: true })
    case RECEIVE_DELETE:
      return Object.assign({}, state, { isFetching: false, items: action.members });
    case SHOW_EDIT_VIEW:
      return Object.assign({}, state, { isEditing: true, selectedItem: action.member })
    case HIDE_EDIT_VIEW:
      return Object.assign({}, state, { isEditing: null, selectedItem: null })
    default:
      return state;
  }
};
