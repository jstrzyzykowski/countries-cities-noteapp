import React from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';

import GameResultModal from '../components/game-result-modal/game-result-modal.components';

export default function ModalManager() {
  const modalLookup = {
    GameResultModal,
    // Other modals here
  };
  const currentModal = useSelector((state) => state.modal);
  let renderedModal;

  if (currentModal) {
    const { modalType } = currentModal;
    const ModalComponent = modalLookup[modalType];
    renderedModal = <ModalComponent />;
  }

  return ReactDOM.createPortal(
    renderedModal,
    document.getElementById('modals'),
  );
}
