import React from 'react';
import ReactDOM from 'react-dom';
import './scss/styles.scss';
import AppRouter from './router/AppRouter';

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

