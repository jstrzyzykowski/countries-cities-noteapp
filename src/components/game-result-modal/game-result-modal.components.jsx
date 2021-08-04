import React from 'react';
import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { closeModal } from '../../redux/modal/modal.actions';

import ModalWrapper from '../../modal/modal-wrapper.component';
import CustomButton from '../custom-button/custom-button.components';

import './game-result-modal.styles.scss';

export default function GameResultModal() {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    history.push('/');
    dispatch(closeModal());
  };

  return (
    <ModalWrapper header="Hallo">
      <h2>Hello</h2>
      <CustomButton handleClick={handleClick}>
        Menu
      </CustomButton>
    </ModalWrapper>
  );
}
