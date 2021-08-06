import React from 'react';

import { useSelector } from 'react-redux';

import PageHeader from '../../components/page-header/page-header.components';
import RoundHistoryList from '../../components/round-history-list/round-history-list.components';

import './game-history-details.styles.scss';

export default function GameHistoryDetailsPage({ history, match }) {
  const { gameRoundNumber } = match.params;
  const currRound = useSelector((state) => state.game.rounds[gameRoundNumber - 1]);
  const pointsUser = currRound.reduce((acc, question) => acc + Number(question.points), 0);

  return (
    <div className="gameHistoryDetailsPage">
      <PageHeader title={`Round ${gameRoundNumber}`} handleClick={() => history.goBack()} stat={pointsUser} />
      <div className="gameHistoryDetailsPage__main">
        <RoundHistoryList rounds={currRound} />
      </div>
    </div>
  );
}
