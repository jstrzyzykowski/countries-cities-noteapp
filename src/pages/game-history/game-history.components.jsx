import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

// import GameNoCategories from '../../components/game-no-categories/game-no-categories.components';
import HistoryRoundList from '../../components/history-round-list/history-round-list.components';
import PageHeader from '../../components/page-header/page-header.components';

import './game-history.styles.scss';

export default function GameHistoryPage() {
  const history = useHistory();
  const { rounds } = useSelector((state) => state.game);

  return (
    <div className="gameHistoryPage">
      <PageHeader title="Game History" handleClick={() => history.push('/new-game')} stat={rounds.length} />
      <div className="gameHistoryPage__main">
        <HistoryRoundList />
        {/* <GameNoCategories /> */}
      </div>
    </div>
  );
}
