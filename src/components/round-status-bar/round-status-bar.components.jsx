import React from 'react';

import './round-status-bar.styles.scss';

export default function RoundStatusBar({ text, status }) {
  return (
    <div className={`roundStatusBar ${status}`}>
      <p className="roundStatusBar__status">{text}</p>
    </div>
  );
}
