import { ADD_GAME_POINTS, ADD_ROUND_DATA, CLEAR_GAME } from './game.types';

const initialState = {
  rounds: [],
  gamePoints: 0,
};

export default function gameReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_ROUND_DATA:
      return {
        ...state,
        rounds: [...state.rounds, payload],
      };
    case ADD_GAME_POINTS:
      return {
        ...state,
        gamePoints: state.gamePoints + payload,
      };
    case CLEAR_GAME:
      return initialState;
    default:
      return state;
  }
}
