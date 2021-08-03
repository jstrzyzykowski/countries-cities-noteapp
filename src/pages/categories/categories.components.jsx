import React from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/page-header/page-header.components';
import SettingCategoryList from '../../components/setting-category-list/setting-category-list.components';

import './categories.styles.scss';

export default function CategoriesPage() {
  const history = useHistory();

  return (
    <div className="categoriesPage">
      <PageHeader title="Categories" handleClick={() => history.push('/')} />
      <div className="categoriesPage__main">
        <SettingCategoryList />
      </div>
    </div>
  );
}
