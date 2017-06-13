export const ADD_MEMBER = 'ADD_MEMBER';
export const UPDATE_MEMBER = 'UPDATE_MEMBER';
export const DELETE_MEMBER = 'DELETE_MEMBER';

export const SHOW_EDIT_VIEW = 'SHOW_EDIT_VIEW';
export const HIDE_EDIT_VIEW = 'HIDE_EDIT_VIEW';

export const UPDATE_SELECTED_ITEM_VALUE = 'UPDATE_SELECTED_ITEM_VALUE';

export const SHOW_EDIT_ERROR = 'SHOW_EDIT_ERROR';

export const addMember = (member) => ({
  type: ADD_MEMBER,
  member,
});

export const updateMember = (member, index) => ({
  type: UPDATE_MEMBER,
  member,
  index,
});

export const deleteMember = (index) => ({
  type: DELETE_MEMBER,
  index
});

export const showEditView = (member, index) => ({
  type: SHOW_EDIT_VIEW,
  member,
  index,
});

export const hideEditView = () => ({
  type: HIDE_EDIT_VIEW,
});

export const updateSelectedItemValue = (name, value) => ({
  type: UPDATE_SELECTED_ITEM_VALUE,
  name,
  value,
});


export const showEditError = (message) => ({
  type: SHOW_EDIT_ERROR,
  message
});
