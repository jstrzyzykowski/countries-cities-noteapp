import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { addRoundPoints, setQuestionAnswer } from '../../redux/round/round.actions';

import './game-question-list-item.styles.scss';

export default function GameQuestionListItem({ question }) {
  const { categoryUniqueName, userAnswer, pointsForAnswer, confirmed } = question;
  const currQuestion = useSelector((state) => state.round.questions.find((element) => element.categoryUniqueName === categoryUniqueName));
  const { status } = useSelector((state) => state.round);
  const currCategory = useSelector((state) => state.category.categories.find((category) => category.uniqueName === categoryUniqueName));
  const dispatch = useDispatch();

  const [questionData, setQuestionData] = useState({
    [`answer-${categoryUniqueName}`]: userAnswer,
    [`point-${categoryUniqueName}`]: pointsForAnswer,
    confirmed,
  });

  const handleChange = (event) => {
    if (!confirmed) {
      setQuestionData({
        ...questionData,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleClickConfirm = () => {
    if ((questionData[`point-${categoryUniqueName}`] !== '') && !questionData.confirmed) {
      const confirmedQuestion = {
        categoryUniqueName,
        userAnswer: questionData[`answer-${categoryUniqueName}`],
        pointsForAnswer: questionData[`point-${categoryUniqueName}`],
        confirmed: true,
      };

      setQuestionData({
        ...questionData,
        confirmed: true,
      });

      dispatch(setQuestionAnswer(confirmedQuestion));
      dispatch(addRoundPoints(Number(questionData[`point-${categoryUniqueName}`])));
    }
  };

  useEffect(() => {
    setQuestionData({
      [`answer-${categoryUniqueName}`]: currQuestion.userAnswer,
      [`point-${categoryUniqueName}`]: currQuestion.pointsForAnswer,
      confirmed: currQuestion.confirmed,
    });
  }, [question]);

  return (
    <div className="gameCategoryListItem">
      <div className="gameCategoryListItem__content">
        <button
          className={`gameCategoryListItem__content-confirmButton ${confirmed ? 'confirmed' : ''} ${status.name === 'progress' ? 'inactive' : ''}`}
          onClick={handleClickConfirm}
        >
          <i className={currCategory.displayIcon}></i>
        </button>
        <div className="gameCategoryListItem__content-text">
          <p className="gameCategoryListItem__content-text-categoryName">{currCategory.displayName}</p>
          <input
            className="gameCategoryListItem__content-text-input"
            type="text"
            name={`answer-${categoryUniqueName}`}
            placeholder="Your answer..."
            value={questionData[`answer-${categoryUniqueName}`]}
            onChange={handleChange}
            disabled={status.name !== 'progress'}
            autoComplete="off"
          />
        </div>
      </div>
      {status.name !== 'progress' && (
        <div className="gameCategoryListItem__checker">
          <label className={`gameCategoryListItem__checker-label ${questionData[`point-${categoryUniqueName}`] === '10' ? 'checked' : ''} ${(questionData[`point-${categoryUniqueName}`] !== '10' && confirmed) ? 'inactive' : ''}`}>
            <input
              className="gameCategoryListItem__checker-label-input"
              type="radio"
              name={`point-${categoryUniqueName}`}
              value={10}
              onChange={handleChange}
            />
            <p className="gameCategoryListItem__checker-label-value">10</p>
          </label>
          <label
            className={`gameCategoryListItem__checker-label ${questionData[`point-${categoryUniqueName}`] === '5' ? 'checked' : ''} ${(questionData[`point-${categoryUniqueName}`] !== '5' && confirmed) ? 'inactive' : ''}`}
          >
            <input
              className="gameCategoryListItem__checker-label-input"
              type="radio"
              name={`point-${categoryUniqueName}`}
              value={5}
              onChange={handleChange}
            />
            <p className="gameCategoryListItem__checker-label-value">5</p>
          </label>
          <label className={`gameCategoryListItem__checker-label ${questionData[`point-${categoryUniqueName}`] === '0' ? 'checked' : ''} ${(questionData[`point-${categoryUniqueName}`] !== '0' && confirmed) ? 'inactive' : ''}`}>
            <input
              className="gameCategoryListItem__checker-label-input"
              type="radio"
              name={`point-${categoryUniqueName}`}
              value={0}
              onChange={handleChange}
            />
            <p className="gameCategoryListItem__checker-label-value">0</p>
          </label>
        </div>
      )}
    </div>
  );
}
