export const REQUEST_MEMBERS = 'REQUEST_MEMBERS';
export const RECEIVE_MEMBERS = 'RECEIVE_MEMBERS';

export const REQUEST_SAVE = 'REQUEST_SAVE';
export const RECEIVE_SAVE = 'RECEIVE_SAVE';

export const REQUEST_DELETE = 'REQUEST_DELETE';
export const RECEIVE_DELETE = 'RECEIVE_DELETE';

export const SHOW_EDIT_VIEW = 'SHOW_EDIT_VIEW';
export const HIDE_EDIT_VIEW = 'HIDE_EDIT_VIEW';

export const requestMembers = () => ({
  type: REQUEST_MEMBERS,
});

export const receiveMembers = (members) => ({
  type: RECEIVE_MEMBERS,
  members,
});

export const requestSave = (member) => ({
  type: REQUEST_SAVE,
  member
});

export const receiveSave = (member) => ({
  type: RECEIVE_SAVE,
  member
});

export const requestDelete = (member) => ({
  type: REQUEST_DELETE,
  member
});

export const receiveDelete = (member) => ({
  type: RECEIVE_DELETE,
  member
});

export const showEditView = (member) => ({
  type: SHOW_EDIT_VIEW,
  member,
});

export const hideEditView = () => ({
  type: HIDE_EDIT_VIEW,
});
