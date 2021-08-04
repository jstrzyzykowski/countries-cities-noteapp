import React from 'react';
import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { closeModal } from '../../redux/modal/modal.actions';

import ModalWrapper from '../../modal/modal-wrapper.component';
// import CustomButton from '../custom-button/custom-button.components';

// import IconResultHome from '../../assets/icon-result-home.png';
import IconPointGame from '../../assets/icon-point-game.png';
import IconResultStar from '../../assets/icon-result-star.png';

import './game-result-modal.styles.scss';
import CustomButton from '../custom-button/custom-button.components';

export default function GameResultModal() {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    history.push('/');
    dispatch(closeModal());
  };

  return (
    <ModalWrapper header="Game Result">
      <div className="gameResultModal__stars">
        <div className="gameResultModal__stars-imageContainer">
          <img className="gameResultModal__stars-imageContainer-image" src={IconResultStar} alt="" />
        </div>
        <div className="gameResultModal__stars-imageContainer">
          <img className="gameResultModal__stars-imageContainer-image" src={IconResultStar} alt="" />
        </div>
        <div className="gameResultModal__stars-imageContainer">
          <img className="gameResultModal__stars-imageContainer-image" src={IconResultStar} alt="" />
        </div>
      </div>
      <div className="gameResultModal__result">
        <div className="gameResultModal__result-total">
          <div className="gameResultModal__result-total-imageContainer">
            <img className="gameResultModal__result-total-imageContainer-image" src={IconPointGame} alt="" />
          </div>
          <p className="gameResultModal__result-total-title">Total points</p>
          <p className="gameResultModal__result-total-value">120</p>
        </div>
        <div className="gameResultModal__result-details">
          <div className="gameResultModal__result-details-detail">
            <p className="gameResultModal__result-details-detail-icon">10</p>
            <p className="gameResultModal__result-details-detail-value">141</p>
          </div>
          <div className="gameResultModal__result-details-detail">
            <p className="gameResultModal__result-details-detail-icon">5</p>
            <p className="gameResultModal__result-details-detail-value">201</p>
          </div>
          <div className="gameResultModal__result-details-detail">
            <p className="gameResultModal__result-details-detail-icon">0</p>
            <p className="gameResultModal__result-details-detail-value">181</p>
          </div>
        </div>
      </div>
      <CustomButton fluid handleClick={handleClick}>
        Finish
      </CustomButton>
    </ModalWrapper>
  );
}
