import React, { useState } from 'react';

import './game-category-list-item.styles.scss';

export default function GameCategoryListItem({ category }) {
  const [categoryData, setCategoryData] = useState({
    [`answer-${category}`]: '',
    [`point-${category}`]: '',
  });

  const handleChange = (event) => {
    setCategoryData({
      ...categoryData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="gameCategoryListItem">
      <div className="gameCategoryListItem__content">
        <button className="gameCategoryListItem__content-confirmButton progress">
          <i className="fas fa-cat"></i>
        </button>
        <div className="gameCategoryListItem__content-text">
          <p className="gameCategoryListItem__content-text-categoryName">{category}</p>
          <input className="gameCategoryListItem__content-text-input" type="text" name={`answer-${category}`} placeholder="Your answer..." onChange={handleChange} />
        </div>
      </div>
      <div className="gameCategoryListItem__checker">
        <label className={`gameCategoryListItem__checker-label ${categoryData[`point-${category}`] === '10' ? 'checked' : ''}`}>
          <input className="gameCategoryListItem__checker-label-input" type="radio" name={`point-${category}`} value={10} onChange={handleChange} />
          <p className="gameCategoryListItem__checker-label-value">10</p>
        </label>
        <label className={`gameCategoryListItem__checker-label ${categoryData[`point-${category}`] === '5' ? 'checked' : ''}`}>
          <input className="gameCategoryListItem__checker-label-input" type="radio" name={`point-${category}`} value={5} onChange={handleChange} />
          <p className="gameCategoryListItem__checker-label-value">5</p>
        </label>
        <label className={`gameCategoryListItem__checker-label ${categoryData[`point-${category}`] === '0' ? 'checked' : ''}`}>
          <input className="gameCategoryListItem__checker-label-input" type="radio" name={`point-${category}`} value={0} onChange={handleChange} />
          <p className="gameCategoryListItem__checker-label-value">0</p>
        </label>
      </div>
    </div>
  );
}
