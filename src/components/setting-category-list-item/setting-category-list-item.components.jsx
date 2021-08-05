import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { toggleCategoryCheck } from '../../redux/category/category.actions';

import './setting-category-list-item.styles.scss';

export default function SettingCategoryListItem({ category }) {
  const { uniqueName, displayName, displayIcon, checked } = category;
  const [isChecked, setIsChecked] = useState(checked);
  const dispatch = useDispatch();

  const handleChange = () => {
    setIsChecked((prevValue) => !prevValue);
    dispatch(toggleCategoryCheck(uniqueName));
  };

  return (
    <label className={`settingCategoryListItem ${isChecked ? 'checked' : ''}`}>
      <input className="settingCategoryListItem__input" type="checkbox" name="category" value={uniqueName} onChange={handleChange} checked={isChecked} />
      <i className={displayIcon}></i>
      <p className="settingCategoryListItem__title">{displayName}</p>
    </label>
  );
}
