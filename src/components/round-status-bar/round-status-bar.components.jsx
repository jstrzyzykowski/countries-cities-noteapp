import React from 'react';
import { useTranslation } from 'react-i18next';

import './round-status-bar.styles.scss';

export default function RoundStatusBar({ status }) {
  const { t } = useTranslation();
  return (
    <div className={`roundStatusBar ${status}`}>
      <p className="roundStatusBar__status">{t(`round_status_bar_${status}`)}</p>
    </div>
  );
}
