import React from 'react';
import Game from './components/Game';
import About from './components/About';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Conway's Game of Life</h1>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Game />
        <About />
      </header>
    </div>
  );
}

export default App;
