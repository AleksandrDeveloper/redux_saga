import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ProviderFunction from './store';


const app =(
  <ProviderFunction>
      <App />
  </ProviderFunction>
)


ReactDOM.render(
    app,
  document.getElementById('root')
);




serviceWorker.unregister();
