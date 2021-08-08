import React from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../redux/modal/modal.actions';

// import IconNavigationBlock from '../../assets/icon-navigation-block.png';
// import IconNavigationNext from '../../assets/icon-navigation-next.png';
// import IconNavigationHistory from '../../assets/icon-navigation-history.png';
// import IconNavigationFinish from '../../assets/icon-navigation-finish.png';

import './game-navigation.styles.scss';
import { resetRound, setRoundStatus } from '../../redux/round/round.actions';
import { STATUS_CHECK, STATUS_PROGRESS } from '../../redux/round/round.data';
import { addGamePoints, addRoundData } from '../../redux/game/game.actions';

export default function GameNavigation() {
  const { t } = useTranslation();
  const history = useHistory();
  const dispatch = useDispatch();
  const { status, questions } = useSelector((state) => state.round);

  const handleClickNext = () => {
    const roundData = questions.map((question) => ({
      category: question.categoryUniqueName,
      answer: question.userAnswer,
      points: question.pointsForAnswer,
    }));

    const pointsForRound = roundData.reduce((acc, question) => acc + Number(question.points), 0);
    // wyslac do historii
    dispatch(addRoundData(roundData));
    dispatch(addGamePoints(pointsForRound));
    dispatch(resetRound());
    dispatch(setRoundStatus(STATUS_PROGRESS));
    // zresetowac round questions (wyzerowanie punktow)
    // ustawic round status na progress
    // console.log(STATUS_PROGRESS);
  };

  return (
    <ul className="gameNavigation">
      <li className="gameNavigation__item">
        <button
          className={`gameNavigation__item-button ${status.name === 'progress' ? 'active' : 'inactive'}`}
          onClick={() => dispatch(setRoundStatus(STATUS_CHECK))}
          disabled={status.name !== 'progress'}
        >
          {/* <div className="gameNavigation__item-button-imageContainer">
            <img className="gameNavigation__item-button-imageContainer-image" src={IconNavigationBlock} alt="" />
          </div> */}
          <i className="fas fa-lock"></i>
          <p>{t('navigation_block')}</p>
        </button>
      </li>
      <li className="gameNavigation__item">
        <button
          className={`gameNavigation__item-button ${status.name === 'ready' ? 'ready' : 'inactive'}`}
          disabled={status.name !== 'ready'}
          onClick={handleClickNext}
        >
          {/* <div className="gameNavigation__item-button-imageContainer">
            <img className="gameNavigation__item-button-imageContainer-image" src={IconNavigationNext} alt="" />
          </div> */}
          <i className="fas fa-forward"></i>
          <p>{t('navigation_next')}</p>
        </button>
      </li>
      <li className="gameNavigation__item">
        <button className="gameNavigation__item-button active" onClick={() => history.push('/new-game/history')}>
          {/* <div className="gameNavigation__item-button-imageContainer">
            <img className="gameNavigation__item-button-imageContainer-image" src={IconNavigationHistory} alt="" />
          </div> */}
          <i className="fas fa-save"></i>
          <p>{t('navigation_history')}</p>
        </button>
      </li>
      <li className="gameNavigation__item">
        <button
          className="gameNavigation__item-button active"
          onClick={() => dispatch(openModal({ modalType: 'GameResultModal' }))}
        >
          {/* <div className="gameNavigation__item-button-imageContainer">
            <img className="gameNavigation__item-button-imageContainer-image" src={IconNavigationFinish} alt="" />
          </div> */}
          <i className="fas fa-trophy"></i>
          <p>{t('navigation_finish')}</p>
        </button>
      </li>
    </ul>
  );
}
