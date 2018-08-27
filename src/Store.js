import { createStore, combineReducers } from 'redux';
import Modal from './redux/main/reducer';

const reducer = combineReducers({
  modal: Modal,
});

const Store = createStore(reducer);

export default Store;
