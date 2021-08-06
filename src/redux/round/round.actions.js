import { ADD_ROUND_QUESTION, RESET_ROUND, SET_ROUND_STATUS, SET_QUESTION_ANSWER, ADD_ROUND_POINTS, CLEAR_ROUND } from './round.types';

export function setRoundStatus(status) {
  return {
    type: SET_ROUND_STATUS,
    payload: status,
  };
}

export function addRoundQuestion(question) {
  return {
    type: ADD_ROUND_QUESTION,
    payload: question,
  };
}

export function resetRound() {
  return {
    type: RESET_ROUND,
  };
}

export function setQuestionAnswer(confirmedQuestion) {
  return {
    type: SET_QUESTION_ANSWER,
    payload: confirmedQuestion,
  };
}

export function addRoundPoints(pointAmount) {
  return {
    type: ADD_ROUND_POINTS,
    payload: pointAmount,
  };
}

export function clearRound() {
  return {
    type: CLEAR_ROUND,
  };
}
