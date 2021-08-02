import React from 'react';

import './setting-category-list-item.styles.scss';

export default function SettingCategoryListItem({ categoryName, categoryIconClass }) {
  return (
    <label className="settingCategoryListItem">
      <input className="settingCategoryListItem__input" type="checkbox" name="category" value={categoryName} />
      <i className={categoryIconClass}></i>
      <p className="settingCategoryListItem__title">{categoryName}</p>
    </label>
  );
}
