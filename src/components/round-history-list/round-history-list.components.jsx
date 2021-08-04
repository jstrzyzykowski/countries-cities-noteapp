import React from 'react';
import GameCategoryListItem from '../game-category-list-item/game-category-list-item.components';

import './round-history-list.styles.scss';

export default function RoundHistoryList() {
  return (
    <div className="roundHistoryList">
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
