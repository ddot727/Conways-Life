import React, { Component } from 'react';
import Box from './Box'
import '../App.css';

class Board extends Component {
  render() {
    const width = (this.props.cols * 16);
    const rowsArr = [];

    var boxClass = "";
    for (var i = 0; i < this.props.rows; i++) {
      for (var j = 0; j < this.props.cols; j++) {
        let boxId = i + "_" + j;

        boxClass = this.props.boardFull[i][j] ? "box on" : "box off";
        rowsArr.push(
          <Box
            boxClass={boxClass}
            key={boxId}
            boxId={boxId}
            row={i}
            col={j}
            selectBox={this.props.selectBox}
          />
        );
      }
    }

    return (
      <div className="board" style={{ width: width }}>
        {rowsArr}
      </div>
    );
  }
}

export default Board;