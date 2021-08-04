import React, { useState } from 'react';

import './setting-category-list-item.styles.scss';

export default function SettingCategoryListItem({ categoryName, categoryIconClass }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked((prevValue) => !prevValue);
  };

  return (
    <label className={`settingCategoryListItem ${isChecked ? 'checked' : ''}`}>
      <input className="settingCategoryListItem__input" type="checkbox" name="category" value={categoryName} onChange={handleChange} />
      <i className={categoryIconClass}></i>
      <p className="settingCategoryListItem__title">{categoryName}</p>
    </label>
  );
}
