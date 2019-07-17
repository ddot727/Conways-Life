import React, { Component } from 'react';
import Board from './Board';
import '../App.css';

class Game extends Component {
  constructor() {
    super();
    this.speed = 100;
    this.rows = 30;
    this.cols = 30;
    this.state = {
      generation: 0,
      boardFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
    };
  }

  selectBox = (row, col) => {
    let boardCopy = arrayClone(this.state.boardFull);
    boardCopy[row][col] = !boardCopy[row][col];
    this.setState({
      boardFull: boardCopy
    });
  }

  seed = () => {
    let boardCopy = arrayClone(this.state.boardFull);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (Math.floor(Math.random() * 4) === 1) {
          boardCopy[i][j] = true;
        }
      }
    }
    this.setState({
      boardFull: boardCopy
    });
  }

  playButton = () => {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(this.play, this.speed);
  }

  pauseButton = () => {
    clearInterval(this.intervalId);
  }

  play = () => {
    let g = this.state.boardFull;
    let g2 = arrayClone(this.state.boardFull);

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        let count = 0;
        if (i > 0) if (g[i - 1][j]) count++;
        if (i > 0 && j > 0) if (g[i - 1][j - 1]) count++;
        if (i > 0 && j < this.cols - 1) if (g[i - 1][j + 1]) count++;
        if (j < this.cols - 1) if (g[i][j + 1]) count++;
        if (j > 0) if (g[i][j - 1]) count++;
        if (i < this.rows - 1) if (g[i + 1][j]) count++;
        if (i < this.rows - 1 && j > 0) if (g[i + 1][j - 1]) count++;
        if (i < this.rows - 1 && j < this.cols - 1) if (g[i + 1][j + 1]) count++;
        if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = false;
        if (!g[i][j] && count === 3) g2[i][j] = true;
      }
    }
    this.setState({
      boardFull: g2,
      generation: this.state.generation + 1
    });

  }

  stop = () => {
    var board = Array(this.rows).fill().map(() => Array(this.cols).fill(false));
    this.setState({
      boardFull: board,
      generation: 0
    });
  }

  componentDidMount() {
    this.seed();
  }

  render() {
    return (
      <div>
        <h2>Generation: # {this.state.generation}</h2>
        <Board
          boardFull={this.state.boardFull}
          rows={this.rows}
          cols={this.cols}
          selectBox={this.selectBox}
        />
        <div className="buttonGroup">
          <button onClick={this.playButton}>Play</button>
          <button onClick={this.pauseButton}>Pause</button>
          <button onClick={this.stop}>Stop</button>
        </div>
      </div>
    );
  }
}

function arrayClone(arr) {
  return JSON.parse(JSON.stringify(arr));
}

export default Game; 