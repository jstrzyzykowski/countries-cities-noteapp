import { OPEN_MODAL, CLOSE_MODAL } from './modal.types';

export function openModal(payload) {
  return {
    type: OPEN_MODAL,
    payload,
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL,
  };
}
