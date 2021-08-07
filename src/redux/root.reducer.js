import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import modalReducer from './modal/modal.reducer';
import roundReducer from './round/round.reducer';
import categoryReducer from './category/category.reducer';
import gameReducer from './game/game.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['round', 'category', 'game'],
};

const rootReducer = combineReducers({
  modal: modalReducer,
  round: roundReducer,
  category: categoryReducer,
  game: gameReducer,
});

export default persistReducer(persistConfig, rootReducer);
