import React from 'react';

// import GameCategoryList from '../../components/game-category-list/game-category-list.components';
import GameNavigation from '../../components/game-navigation/game-navigation.components';
import GameNoCategories from '../../components/game-no-categories/game-no-categories.components';
import HeaderStatisticField from '../../components/header-statistic-field/header-statistic-field.components';
// import RoundStatusBar from '../../components/round-status-bar/round-status-bar.components';

import './game.styles.scss';

export default function GamePage() {
  return (
    <div className="gamePage">
      <div className="gamePage__header">
        <div className="gamePage__header-points">
          <HeaderStatisticField />
          <HeaderStatisticField />
        </div>
      </div>
      <div className="gamePage__main">
        {/* <RoundStatusBar status="Round in progress..." /> */}
        {/* <GameCategoryList /> */}
        <GameNoCategories />
      </div>
      <div className="gamePage__navigation">
        <GameNavigation />
      </div>
    </div>
  );
}
