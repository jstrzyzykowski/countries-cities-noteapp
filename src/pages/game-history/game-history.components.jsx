import React from 'react';
import { useHistory } from 'react-router-dom';

// import GameNoCategories from '../../components/game-no-categories/game-no-categories.components';
import HistoryRoundList from '../../components/history-round-list/history-round-list.components';
import PageHeader from '../../components/page-header/page-header.components';

import './game-history.styles.scss';

export default function GameHistoryPage() {
  const history = useHistory();

  return (
    <div className="gameHistoryPage">
      <PageHeader title="Game History" handleClick={() => history.push('/new-game')} />
      <div className="gameHistoryPage__main">
        <HistoryRoundList />
        {/* <GameNoCategories /> */}
      </div>
    </div>
  );
}
