import { SHOW_MODAL, HIDE_MODAL } from './actionTypes';

function Modal(state = {}, action) {
  switch (action.type) {
    case SHOW_MODAL: return { ...state, modal: action.payload };
    case HIDE_MODAL: return { ...state, modal: null };
    default: return { ...state };
  }
}

export default Modal;
