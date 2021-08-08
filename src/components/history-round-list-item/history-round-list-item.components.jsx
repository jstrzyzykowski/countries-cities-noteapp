import React from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './history-round-list-item.styles.scss';

export default function HistoryRoundListItem({ round, roundNumber }) {
  const { t } = useTranslation();
  const history = useHistory();
  const pointsUser = round.reduce((acc, question) => acc + Number(question.points), 0);
  const pointsMax = round.length * 10;

  return (
    <div className="historyRoundListItem">
      <p className="historyRoundListItem__roundNumber">{roundNumber}</p>
      <p className="historyRoundListItem__roundPoints">{`${pointsUser}/${pointsMax}`}</p>
      <button className="historyRoundListItem__detailsButton" onClick={() => history.push(`/new-game/history/${roundNumber}`)}>
        {t('history_details')}
      </button>
    </div>
  );
}
