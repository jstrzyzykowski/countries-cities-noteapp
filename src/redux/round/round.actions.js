import { SET_ROUND_STATUS } from './round.types';

export function setRoundStatus(status) {
  return {
    type: SET_ROUND_STATUS,
    payload: status,
  };
}
