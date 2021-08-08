import React from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/modal/modal.actions';
import { clearRound } from '../../redux/round/round.actions';
import { clearGame } from '../../redux/game/game.actions';

import ModalWrapper from '../../modal/modal-wrapper.component';
import CustomButton from '../custom-button/custom-button.components';

import IconPointGame from '../../assets/icon-point-game.png';
// import IconResultStar from '../../assets/icon-result-star.png';

import './game-result-modal.styles.scss';

export default function GameResultModal() {
  const { t } = useTranslation();
  const history = useHistory();
  const dispatch = useDispatch();
  const { gamePoints, rounds } = useSelector((state) => state.game);
  const roundsFlat = rounds.flat();

  function howMany(points) {
    const valueInString = String(points);
    return roundsFlat.reduce((acc, question) => {
      if (question.points === valueInString) return acc + 1;
      return acc;
    }, 0);
  }

  const handleClick = () => {
    history.push('/');
    // dispatch(resetRound());
    dispatch(clearRound());
    dispatch(clearGame());
    dispatch(closeModal());
  };

  return (
    <ModalWrapper header={t('resultModal_header_title')}>
      <div className="gameResultModal__stars">
        {/* <div className="gameResultModal__stars-imageContainer">
          <img className="gameResultModal__stars-imageContainer-image" src={IconResultStar} alt="" />
        </div>
        <div className="gameResultModal__stars-imageContainer">
          <img className="gameResultModal__stars-imageContainer-image" src={IconResultStar} alt="" />
        </div>
        <div className="gameResultModal__stars-imageContainer">
          <img className="gameResultModal__stars-imageContainer-image" src={IconResultStar} alt="" />
        </div> */}
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
      </div>
      <div className="gameResultModal__result">
        <div className="gameResultModal__result-total">
          <div className="gameResultModal__result-total-imageContainer">
            <img className="gameResultModal__result-total-imageContainer-image" src={IconPointGame} alt="" />
          </div>
          <p className="gameResultModal__result-total-title">{t('resultModal_total')}</p>
          <p className="gameResultModal__result-total-value">{gamePoints}</p>
        </div>
        <div className="gameResultModal__result-details">
          <div className="gameResultModal__result-details-detail">
            <p className="gameResultModal__result-details-detail-icon">10</p>
            <p className="gameResultModal__result-details-detail-value">{howMany(10)}</p>
          </div>
          <div className="gameResultModal__result-details-detail">
            <p className="gameResultModal__result-details-detail-icon">5</p>
            <p className="gameResultModal__result-details-detail-value">{howMany(5)}</p>
          </div>
          <div className="gameResultModal__result-details-detail">
            <p className="gameResultModal__result-details-detail-icon">0</p>
            <p className="gameResultModal__result-details-detail-value">{howMany(0)}</p>
          </div>
        </div>
      </div>
      <CustomButton fluid handleClick={handleClick}>
        {t('resultModal_button_finish')}
      </CustomButton>
    </ModalWrapper>
  );
}
