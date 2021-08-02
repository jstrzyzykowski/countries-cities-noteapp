import React from 'react';
import GameCategoryListItem from '../game-category-list-item/game-category-list-item.components';

import './game-category-list.styles.scss';

export default function GameCategoryList() {
  return (
    <ul className="gameCategoryList">
      <GameCategoryListItem />
      <GameCategoryListItem />
      <GameCategoryListItem />
    </ul>
  );
}
