import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

// import GameNoCategories from '../../components/game-no-categories/game-no-categories.components';
import HistoryRoundList from '../../components/history-round-list/history-round-list.components';
import PageHeader from '../../components/page-header/page-header.components';

import './game-history.styles.scss';

export default function GameHistoryPage() {
  const { t } = useTranslation();
  const history = useHistory();
  const { rounds } = useSelector((state) => state.game);

  return (
    <div className="gameHistoryPage">
      <PageHeader title={t('history_header_title')} handleClick={() => history.push('/new-game')} stat={rounds.length} />
      <div className="gameHistoryPage__main">
        <HistoryRoundList />
        {/* <GameNoCategories /> */}
      </div>
    </div>
  );
}
