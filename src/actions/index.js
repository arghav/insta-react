import { combineReducers } from 'redux';

import members from './members';

const rootReducer = combineReducers({
  members,
});

export default rootReducer;
