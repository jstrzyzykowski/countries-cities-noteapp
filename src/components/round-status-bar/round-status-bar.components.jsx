import React from 'react';

import './round-status-bar.styles.scss';

export default function RoundStatusBar({ status }) {
  return (
    <div className="roundStatusBar">
      <p className="roundStatusBar__status">{status}</p>
    </div>
  );
}
