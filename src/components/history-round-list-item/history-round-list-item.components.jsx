import React from 'react';
import { useHistory } from 'react-router-dom';

import './history-round-list-item.styles.scss';

export default function HistoryRoundListItem() {
  const history = useHistory();

  return (
    <div className="historyRoundListItem">
      <p className="historyRoundListItem__roundNumber">1</p>
      <p className="historyRoundListItem__roundPoints">60/120</p>
      <button className="historyRoundListItem__detailsButton" onClick={() => history.push('/new-game/history/1')}>
        Details
      </button>
    </div>
  );
}
