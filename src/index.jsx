import React from 'react';
import ReactDOM from 'react-dom';

import './stylesheets/application.scss';
import App from './components/app';
import reportWebVitals from './reportWebVitals';



const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <App />,
    root
  );
}
