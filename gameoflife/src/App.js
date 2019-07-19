import React from 'react';
import Game from './components/Game';
import About from './components/About';
import spinner from './game_of_life.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Conway's Game of Life</h1>
        <img src={spinner} className="App-logo" alt="logo" />
        <Game />
        <About />
      </header>
    </div>
  );
}

export default App;
