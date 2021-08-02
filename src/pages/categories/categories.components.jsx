import React from 'react';
import { useHistory } from 'react-router-dom';

import HeaderStatisticField from '../../components/header-statistic-field/header-statistic-field.components';
import SettingCategoryList from '../../components/setting-category-list/setting-category-list.components';

import './categories.styles.scss';

export default function CategoriesPage() {
  const history = useHistory();

  return (
    <div className="categoriesPage">
      <div className="categoriesPage__header">
        <button className="categoriesPage__header-backButton" onClick={() => history.push('/')}>
          <i className="fas fa-angle-left"></i>
        </button>
        <p className="categoriesPage__header-title">Categories</p>
        <HeaderStatisticField />
      </div>
      <div className="categoriesPage__main">
        <SettingCategoryList />
      </div>
    </div>
  );
}
