import React from 'react';
import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setRoundStatus } from '../../redux/round/round.actions';
// eslint-disable-next-line no-unused-vars
import { STATUS_PROGRESS } from '../../redux/round/round.data';

import CustomButton from '../../components/custom-button/custom-button.components';

import './home.styles.scss';

export default function HomePage() {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClickGame = () => {
    dispatch(setRoundStatus(STATUS_PROGRESS));
    history.push('/new-game');
  };

  return (
    <div className="homePage">
      <div className="homePage__buttons">
        <CustomButton handleClick={handleClickGame}>
          Game
        </CustomButton>
        <CustomButton handleClick={() => history.push('/categories')}>
          Categories
        </CustomButton>
      </div>
    </div>
  );
}
