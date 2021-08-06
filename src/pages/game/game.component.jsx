import React from 'react';

import { useSelector } from 'react-redux';

// import IconCategories from '../../assets/icon-categories.png';
import IconPointGame from '../../assets/icon-point-game.png';
import IconPointRound from '../../assets/icon-point-round.png';

import GameQuestionList from '../../components/game-question-list/game-question-list.components';
import GameNavigation from '../../components/game-navigation/game-navigation.components';
import HeaderStatisticField from '../../components/header-statistic-field/header-statistic-field.components';
import RoundStatusBar from '../../components/round-status-bar/round-status-bar.components';

import './game.styles.scss';

export default function GamePage() {
  const { name, description } = useSelector((state) => state.round.status);
  const { roundPoints } = useSelector((state) => state.round);
  const { gamePoints } = useSelector((state) => state.game);

  return (
    <div className="gamePage">
      <div className="gamePage__header">
        <RoundStatusBar status={name} text={description} />
        <div className="gamePage__header-points">
          <HeaderStatisticField iconImage={IconPointRound} points={roundPoints} />
          <HeaderStatisticField iconImage={IconPointGame} points={gamePoints} />
        </div>
      </div>
      <div className="gamePage__main">
        <GameQuestionList />
      </div>
      <div className="gamePage__navigation">
        <GameNavigation />
      </div>
    </div>
  );
}
