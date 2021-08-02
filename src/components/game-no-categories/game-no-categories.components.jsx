import React from 'react';
import { useHistory } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.components';

import './game-no-categories.styles.scss';

export default function GameNoCategories() {
  const history = useHistory();

  return (
    <div className="gameNoCategories">
      <div className="gameNoCategories__imageContainer">
        <img className="gameNoCategories__imageContainer-image" src="https://i.ibb.co/kQTZN40/nw-icon.png" alt="" />
      </div>
      <p className="gameNoCategories__title">No categories selected</p>
      <p className="gameNoCategories__description">
        Please go to the
        {' '}
        <span className="gameNoCategories__description-important">Categories</span>
        {' '}
        and choose some of them to start game
      </p>
      <CustomButton handleClick={() => history.push('/categories')}>
        Categories
      </CustomButton>
    </div>
  );
}
