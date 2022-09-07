import { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.scss';

type User = {
  id: number;
  name: string;
  age: number;
  personalColor: string;
}

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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