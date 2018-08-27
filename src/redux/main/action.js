import { SHOW_MODAL, HIDE_MODAL } from './actionTypes';

export function showModal(action) {
  return {
    type: SHOW_MODAL,
    payload: action,
  };
}

export function hideModal() {
  return {
    type: HIDE_MODAL,
    payload: null,
  };
}
