import './i18n/i18n';
import { useTranslation } from 'react-i18next';

import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
        {t('Welcome to React')}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          <code> src/App.js </code>
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
