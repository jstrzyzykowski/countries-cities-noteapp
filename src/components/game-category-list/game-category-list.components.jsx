import React from 'react';
import GameCategoryListItem from '../game-category-list-item/game-category-list-item.components';

import './game-category-list.styles.scss';

export default function GameCategoryList() {
  return (
    <div className="gameCategoryList">
      <GameCategoryListItem category="animal" />
      <GameCategoryListItem category="city" />
      <GameCategoryListItem category="country" />
      <GameCategoryListItem category="person" />
      <GameCategoryListItem category="thing" />
      <GameCategoryListItem category="profession" />
      <GameCategoryListItem category="plant" />
    </div>
  );
}
