import React from 'react';

import './header-statistic-field.styles.scss';

export default function HeaderStatisticField({ iconImage, points }) {
  return (
    <div className="headerStatisticField">
      <div className="headerStatisticField__iconImageContainer">
        <img className="headerStatisticField__iconImageContainer-image" src={iconImage} alt="" />
      </div>
      <p className="headerStatisticField__value">{points}</p>
    </div>
  );
}
