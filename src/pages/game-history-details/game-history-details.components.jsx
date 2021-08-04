import React from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/page-header/page-header.components';
import RoundHistoryList from '../../components/round-history-list/round-history-list.components';

import './game-history-details.styles.scss';

export default function GameHistoryDetailsPage() {
  const history = useHistory();

  return (
    <div className="gameHistoryDetailsPage">
      <PageHeader title="Round History" handleClick={() => history.goBack()} />
      <div className="gameHistoryDetailsPage__main">
        <RoundHistoryList />
      </div>
    </div>
  );
}
