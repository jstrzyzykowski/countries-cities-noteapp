import React from 'react';
import { useSelector } from 'react-redux';

import './round-history-list-item.styles.scss';

export default function RoundHistoryListItem({ round }) {
  const { category, answer, points } = round;
  const currCategory = useSelector((state) => state.category.categories.find((element) => element.uniqueName === category));

  return (
    <div className="roundHistoryListItem">
      <div className="roundHistoryListItem__iconContainer">
        <i className={currCategory.displayIcon}></i>
      </div>
      <p className={`roundHistoryListItem__pointsValue ${points !== '0' ? 'points' : 'nopoints'}`}>{points}</p>
      <div className="roundHistoryListItem__textContainer">
        <p className="roundHistoryListItem__textContainer-category">{category}</p>
        <p className="roundHistoryListItem__textContainer-answer">{answer !== '' ? answer : 'Nothing'}</p>
      </div>
    </div>
  );
}
