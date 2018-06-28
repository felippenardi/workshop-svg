import React, { Component } from 'react'
import SwipeableViews from 'react-swipeable-views';

const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slide1: {
    background: '#FEA900',
  },
  slide2: {
    background: '#B3DC4A',
  },
  slide3: {
    background: '#6AC0FF',
  },
};

export default class Welcome extends Component {
  state = {
    progress: 0
  }
  handleSwitching = (index, type) => {
    const progress = Math.trunc(index * 100) % 100
    this.setState({ progress })
  }

  render() {
    return (
      <div>
        <h1>{ this.state.progress }%</h1>
        <SwipeableViews
          enableMouseEvents={true}
          onSwitching={this.handleSwitching}
        >
          <div style={Object.assign({}, styles.slide, styles.slide1)}>
            slide n°1
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide2)}>
            slide n°2
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide3)}>
            slide n°3
          </div>
        </SwipeableViews>
      </div>
    )
  }
}
