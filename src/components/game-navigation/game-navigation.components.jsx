import React from 'react';

import './game-navigation.styles.scss';

export default function GameNavigation() {
  return (
    <ul className="gameNavigation">
      <li className="gameNavigation__item">
        <button className="gameNavigation__item-button">
          <p>Finish Round</p>
        </button>
      </li>
      <li className="gameNavigation__item">
        <button className="gameNavigation__item-button">
          <p>Next Round</p>
        </button>
      </li>
      <li className="gameNavigation__item">
        <button className="gameNavigation__item-button">
          <p>Game History</p>
        </button>
      </li>
      <li className="gameNavigation__item">
        <button className="gameNavigation__item-button">
          <p>Finish Game</p>
        </button>
      </li>
    </ul>
  );
}
