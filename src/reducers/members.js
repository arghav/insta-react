import {
  ADD_MEMBER, UPDATE_MEMBER, DELETE_MEMBER,
  SHOW_EDIT_VIEW, HIDE_EDIT_VIEW,
  UPDATE_SELECTED_ITEM_VALUE,
  SHOW_EDIT_ERROR,
} from '../actions/members';

export default (state = {
  // view context
  isEditing: false,

  // data context
  items: [],
  selectedItem: {
    index: null,
    data: null,
  }, // selecedItem is used to manage the item in edit context and for faster update/delete
  editError: null,
}, action) => {
  switch (action.type) {
    case ADD_MEMBER:
      return Object.assign({}, state, { items: [...state.items, action.member]  });
    case UPDATE_MEMBER:
      const updateableItems = [...state.items];
      updateableItems[action.index] = action.member;
      return Object.assign({}, state, { items: updateableItems });
    case DELETE_MEMBER:
      const deletableItems = [...state.items];
      deletableItems.splice(action.index, 1);
      return Object.assign({}, state, { items: [...deletableItems] });
    case SHOW_EDIT_VIEW:
      return Object.assign({}, state, { isEditing: true, selectedItem: { index: action.index, data: action.member }, editError: null })
    case HIDE_EDIT_VIEW:
      return Object.assign({}, state, { isEditing: null, selectedItem: { index: null, data: null }, editError: null });
    case UPDATE_SELECTED_ITEM_VALUE:
      const data = { ...state.selectedItem.data };
      data[action.name] = action.value;

      return Object.assign({}, state, { selectedItem: { index: state.selectedItem.index, data } });
    case SHOW_EDIT_ERROR:
      return Object.assign({}, state, { editError: action.message })
    default:
      return state;
  }
};
