import { SET_ROUND_STATUS } from './round.types';

const initialState = {
  status: null,
  questions: null,
};

export default function reoundReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_ROUND_STATUS:
      return {
        ...state,
        status: payload,
      };

    default:
      return state;
  }
}
