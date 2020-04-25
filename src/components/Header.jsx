import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../styles/header.scss';

function App() {
  return (
        <header className="header">
            <Link to={'/'}>
                <img src={logo} className="logo" alt="logo" />
            </Link>
        </header>
  );
}

export default App;
