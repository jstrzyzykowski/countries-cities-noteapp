import React from 'react';
import { useHistory } from 'react-router-dom';

import CustomButton from '../../components/custom-button/custom-button.components';

import './home.styles.scss';

export default function HomePage() {
  const history = useHistory();

  return (
    <div className="homePage">
      <div className="homePage__buttons">
        <CustomButton handleClick={() => history.push('/new-game')}>
          Game
        </CustomButton>
        <CustomButton handleClick={() => history.push('/categories')}>
          Categories
        </CustomButton>
      </div>
    </div>
  );
}
