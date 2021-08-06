import { combineReducers } from 'redux';

import modalReducer from './modal/modal.reducer';
import roundReducer from './round/round.reducer';
import categoryReducer from './category/category.reducer';
import gameReducer from './game/game.reducer';

const rootReducer = combineReducers({
  modal: modalReducer,
  round: roundReducer,
  category: categoryReducer,
  game: gameReducer,
});

export default rootReducer;
