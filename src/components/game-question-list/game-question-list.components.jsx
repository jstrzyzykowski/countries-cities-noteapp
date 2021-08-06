import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setRoundStatus } from '../../redux/round/round.actions';
import { STATUS_READY } from '../../redux/round/round.data';

import GameQuestionListItem from '../game-question-list-item/game-question-list-item.components';

import './game-question-list.styles.scss';

export default function GameQuestionList() {
  const { questions } = useSelector((state) => state.round);
  const dispatch = useDispatch();

  useEffect(() => {
    let isReady = true;
    questions.forEach((question) => {
      if (!question.confirmed) isReady = false;
    });
    if (isReady) dispatch(setRoundStatus(STATUS_READY));
  }, [questions]);

  return (
    <div className="gameQuestionList">
      {questions.map((question) => <GameQuestionListItem question={question} key={question.categoryUniqueName} />)}
    </div>
  );
}
