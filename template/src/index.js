import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.scss';
import App from './app';
import reportWebVitals from './reportWebVitals';
// eslint-disable-next-line no-unused-vars
import i18n from './app/common/i18n';

import appStore from './stateManagement/appStore';

ReactDOM.render(
  <Suspense fallback="loading">
    <React.StrictMode>
      <Provider store={appStore}>
        <App />
      </Provider>
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
