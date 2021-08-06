import { ADD_ROUND_QUESTION, RESET_ROUND, SET_ROUND_STATUS, SET_QUESTION_ANSWER, ADD_ROUND_POINTS, CLEAR_ROUND } from './round.types';

const initialState = {
  status: null,
  questions: [],
  roundPoints: 0,
};

export default function roundReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_ROUND_STATUS:
      return {
        ...state,
        status: payload,
      };
    case ADD_ROUND_QUESTION:
      return {
        ...state,
        questions: [...state.questions, payload],
      };
    case SET_QUESTION_ANSWER:
      return {
        ...state,
        questions: state.questions.map((question) => {
          if (question.categoryUniqueName === payload.categoryUniqueName) return payload;
          return question;
        }),
      };
    case ADD_ROUND_POINTS:
      return {
        ...state,
        roundPoints: state.roundPoints + payload,
      };
    case RESET_ROUND:
      return {
        ...state,
        questions: state.questions.map((question) => ({
          ...question,
          userAnswer: '',
          pointsForAnswer: '',
          confirmed: false,
        })),
        roundPoints: 0,
      };
    case CLEAR_ROUND:
      return initialState;
    default:
      return state;
  }
}
