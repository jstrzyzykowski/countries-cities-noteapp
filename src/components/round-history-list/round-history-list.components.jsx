import React from 'react';
import RoundHistoryListItem from '../round-history-list-item/round-history-list-item.components';

// import GameQuestionListItem from '../game-question-list-item/game-question-list-item.components';

import './round-history-list.styles.scss';

export default function RoundHistoryList({ rounds }) {
  return (
    <div className="roundHistoryList">
      {rounds.map((round) => <RoundHistoryListItem key={round.category} round={round} />)}
      {/* TODO: Create RoundHistoryListItem === question in round in rounds in game state */}
      {/* <RoundHistoryListItem /> */}
    </div>
  );
}
