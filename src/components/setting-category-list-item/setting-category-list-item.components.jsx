import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { toggleCategoryCheck } from '../../redux/category/category.actions';

import './setting-category-list-item.styles.scss';

export default function SettingCategoryListItem({ category }) {
  const { uniqueName } = category;
  const currCategory = useSelector((state) => state.category.categories.find((element) => element.uniqueName === uniqueName));
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(toggleCategoryCheck(uniqueName));
  };

  return (
    <label className={`settingCategoryListItem ${currCategory.checked ? 'checked' : ''}`}>
      <input className="settingCategoryListItem__input" type="checkbox" name="category" value={uniqueName} onChange={handleChange} checked={currCategory.checked} />
      <i className={currCategory.displayIcon}></i>
      <p className="settingCategoryListItem__title">{currCategory.displayName}</p>
    </label>
  );
}
