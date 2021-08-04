import React from 'react';
import HistoryRoundListItem from '../history-round-list-item/history-round-list-item.components';

import './history-round-list.styles.scss';

export default function HistoryRoundList() {
  return (
    <div className="historyRoundList">
      <HistoryRoundListItem />
      <HistoryRoundListItem />
      <HistoryRoundListItem />
      <HistoryRoundListItem />
      <HistoryRoundListItem />
      <HistoryRoundListItem />
      <HistoryRoundListItem />
      <HistoryRoundListItem />
    </div>
  );
}
