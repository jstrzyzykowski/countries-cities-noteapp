import React from 'react';
import SettingCategoryListItem from '../setting-category-list-item/setting-category-list-item.components';

import './setting-category-list.styles.scss';

export default function SettingCategoryList() {
  return (
    <div className="settingCategoryList">
      <SettingCategoryListItem categoryName="animals" categoryIconClass="fas fa-cat" />
      <SettingCategoryListItem categoryName="country" categoryIconClass="fas fa-cat" />
      <SettingCategoryListItem categoryName="city" categoryIconClass="fas fa-cat" />
      <SettingCategoryListItem categoryName="person" categoryIconClass="fas fa-cat" />
      <SettingCategoryListItem categoryName="thing" categoryIconClass="fas fa-cat" />
      <SettingCategoryListItem categoryName="plant" categoryIconClass="fas fa-cat" />
      <SettingCategoryListItem categoryName="profession" categoryIconClass="fas fa-cat" />
    </div>
  );
}
