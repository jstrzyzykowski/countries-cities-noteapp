import { combineReducers } from 'redux';

import modalReducer from './modal/modal.reducer';

const rootReducer = combineReducers({
  modal: modalReducer,
});

export default rootReducer;
