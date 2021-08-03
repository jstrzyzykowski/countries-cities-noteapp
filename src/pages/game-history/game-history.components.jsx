import React from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/page-header/page-header.components';

import './game-history.styles.scss';

export default function GameHistoryPage() {
  const history = useHistory();

  return (
    <div className="gameHistoryPage">
      <PageHeader title="Game History" handleClick={() => history.push('/new-game')} />
      <div className="gameHistoryPage__main">

      </div>
    </div>
  );
}
