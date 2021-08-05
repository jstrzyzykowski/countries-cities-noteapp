import React from 'react';

import SettingCategoryListItem from '../setting-category-list-item/setting-category-list-item.components';
import { CATEGORIES } from '../../redux/category/category.data';

import './setting-category-list.styles.scss';

export default function SettingCategoryList() {
  return (
    <div className="settingCategoryList">
      {CATEGORIES.map(
        (category) => <SettingCategoryListItem category={category} key={category.uniqueName} />,
      )}
    </div>
  );
}
