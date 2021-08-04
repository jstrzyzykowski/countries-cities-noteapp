import React from 'react';

import IconCategories from '../../assets/icon-categories.png';

import HeaderStatisticField from '../header-statistic-field/header-statistic-field.components';

import './page-header.styles.scss';

export default function PageHeader({ title, handleClick }) {
  return (
    <div className="pageHeader">
      <button className="pageHeader__backButton" onClick={handleClick}>
        <i className="fas fa-angle-left"></i>
      </button>
      <p className="pageHeader__title">{title}</p>
      <HeaderStatisticField iconImage={IconCategories} />
    </div>
  );
}
