import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import registerServiceWorker from './net/registerServiceWorker';
import './styles/index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
