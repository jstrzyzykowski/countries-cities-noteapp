import React from 'react';
import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/modal/modal.actions';

import IconNavigationBlock from '../../assets/icon-navigation-block.png';
import IconNavigationNext from '../../assets/icon-navigation-next.png';
import IconNavigationHistory from '../../assets/icon-navigation-history.png';
import IconNavigationFinish from '../../assets/icon-navigation-finish.png';

import './game-navigation.styles.scss';

export default function GameNavigation() {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <ul className="gameNavigation">
      <li className="gameNavigation__item">
        <button className="gameNavigation__item-button">
          <div className="gameNavigation__item-button-imageContainer">
            <img className="gameNavigation__item-button-imageContainer-image" src={IconNavigationBlock} alt="" />
          </div>
          <p>Block</p>
        </button>
      </li>
      <li className="gameNavigation__item">
        <button className="gameNavigation__item-button">
          <div className="gameNavigation__item-button-imageContainer">
            <img className="gameNavigation__item-button-imageContainer-image" src={IconNavigationNext} alt="" />
          </div>
          <p>Next</p>
        </button>
      </li>
      <li className="gameNavigation__item">
        <button className="gameNavigation__item-button" onClick={() => history.push('/new-game/history')}>
          <div className="gameNavigation__item-button-imageContainer">
            <img className="gameNavigation__item-button-imageContainer-image" src={IconNavigationHistory} alt="" />
          </div>
          <p>History</p>
        </button>
      </li>
      <li className="gameNavigation__item">
        <button className="gameNavigation__item-button" onClick={() => dispatch(openModal({ modalType: 'GameResultModal' }))}>
          <div className="gameNavigation__item-button-imageContainer">
            <img className="gameNavigation__item-button-imageContainer-image" src={IconNavigationFinish} alt="" />
          </div>
          <p>Finish</p>
        </button>
      </li>
    </ul>
  );
}
