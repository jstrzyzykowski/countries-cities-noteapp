import React from 'react';
import { useSelector } from 'react-redux';

import HistoryRoundListItem from '../history-round-list-item/history-round-list-item.components';

import './history-round-list.styles.scss';

export default function HistoryRoundList() {
  const { rounds } = useSelector((state) => state.game);
  return (
    <div className="historyRoundList">
      {rounds.map((round, index) => <HistoryRoundListItem key={index} round={round} roundNumber={index + 1} />)}
    </div>
  );
}
