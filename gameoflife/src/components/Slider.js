import React, { Component } from 'react';

class Slider extends Component {

  handleSpeedChange = newSpeed => {
    this.setState({ speed: newSpeed });
  }

  render() {
    return (
      <input
        type="range"
        min="50"
        max="1000"
        step="50"
        value={this.speed}
        onChange={this.handleSpeedChange}
      />
    );
  }
}

export default Slider;