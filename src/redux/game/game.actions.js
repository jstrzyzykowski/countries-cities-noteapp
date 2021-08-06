import { ADD_ROUND_DATA, ADD_GAME_POINTS, CLEAR_GAME } from './game.types';

export function addRoundData(roundData) {
  return {
    type: ADD_ROUND_DATA,
    payload: roundData,
  };
}

export function addGamePoints(pointAmount) {
  return {
    type: ADD_GAME_POINTS,
    payload: pointAmount,
  };
}

export function clearGame() {
  return {
    type: CLEAR_GAME,
  };
}
