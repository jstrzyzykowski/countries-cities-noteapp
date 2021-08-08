import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { store, persistor } from './redux/store';
// eslint-disable-next-line no-unused-vars
import i18n from './i18n';

import './index.css';

const rootElement = document.getElementById('root');

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Router>
    </Provider>,
    rootElement,
  );
}

if (module.hot) {
  module.hot.accept('./App.js', () => {
    setTimeout(render());
  });
}

render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
