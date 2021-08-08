import React from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { addRoundQuestion, setRoundStatus } from '../../redux/round/round.actions';
import { STATUS_PROGRESS } from '../../redux/round/round.data';

import CustomButton from '../../components/custom-button/custom-button.components';
import ControllerLanguage from '../../components/controller-language/controller-language.components';

import './home.styles.scss';

export default function HomePage() {
  const { t } = useTranslation();
  const history = useHistory();
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);
  const checkedCategories = useSelector((state) => state.category.categories.filter((category) => category.checked));

  const handleClickGame = () => {
    categories.forEach((category) => {
      if (category.checked === true) {
        const question = {
          categoryUniqueName: category.uniqueName,
          userAnswer: '',
          pointsForAnswer: '',
          confirmed: false,
        };
        dispatch(addRoundQuestion(question));
      }
    });
    dispatch(setRoundStatus(STATUS_PROGRESS));
    history.push('/new-game');
  };

  return (
    <div className="homePage">
      <ControllerLanguage />
      <div className="homePage__buttons">
        <CustomButton handleClick={handleClickGame} disabled={checkedCategories.length === 0}>
          {t('home_button_1')}
        </CustomButton>
        <CustomButton handleClick={() => history.push('/categories')}>
          {t('home_button_2')}
        </CustomButton>
      </div>
    </div>
  );
}
