import React from 'react';

import './game-category-list-item.styles.scss';

export default function GameCategoryListItem() {
  return (
    <li className="gameCategoryListItem">
      <div className="gameCategoryListItem__content">
        <i className="fas fa-cat"></i>
        <div className="gameCategoryListItem__content-text">
          <p className="gameCategoryListItem__content-text-categoryName">Animal</p>
          <input className="gameCategoryListItem__content-text-input" type="text" name="animal" placeholder="Your answer..." />
        </div>
      </div>
      <div className="gameCategoryListItem__checker">
        <label className="gameCategoryListItem__checker-label">
          <input className="gameCategoryListItem__checker-label-input" type="radio" name="point" value={10} />
          <p className="gameCategoryListItem__checker-label-value">10</p>
        </label>
        <label className="gameCategoryListItem__checker-label">
          <input className="gameCategoryListItem__checker-label-input" type="radio" name="point" value={5} />
          <p className="gameCategoryListItem__checker-label-value">5</p>
        </label>
        <label className="gameCategoryListItem__checker-label">
          <input className="gameCategoryListItem__checker-label-input" type="radio" name="point" value={0} />
          <p className="gameCategoryListItem__checker-label-value">0</p>
        </label>
      </div>
    </li>
  );
}
