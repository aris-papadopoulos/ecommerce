import React from 'react';
import logo from '../logo.svg';
import '../styles/header.scss';

function App() {
  return (
        <header className="header">
            <img src={logo} className="logo" alt="logo" />
        </header>
  );
}

export default App;
