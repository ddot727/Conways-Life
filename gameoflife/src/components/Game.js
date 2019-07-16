import React, { Component } from 'react';
import Board from './Board';
import '../App.css';

class Game extends Component {
  constructor() {
    super();
    this.rows = 30;
    this.cols = 30;
    this.state = {
      generation: 0,
      gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
    };
  }

  render() {
    return (
      <div>
        <h2>Generation: # {this.state.generation}</h2>
        <Board
          gridFull={this.state.gridFull}
          rows={this.rows}
          cols={this.cols}
          selectBox={this.selectBox}
        />
        <div className="buttonGroup">
          <button>Play</button>
          <button>Pause</button>
          <button>Stop</button>
        </div>
      </div>
    );
  }
}

export default Game; 