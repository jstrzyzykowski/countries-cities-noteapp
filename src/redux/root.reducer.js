import { combineReducers } from 'redux';
import categoryReducer from './category/category.reducer';

import modalReducer from './modal/modal.reducer';
import reoundReducer from './round/round.reducer';

const rootReducer = combineReducers({
  modal: modalReducer,
  round: reoundReducer,
  category: categoryReducer,
});

export default rootReducer;
