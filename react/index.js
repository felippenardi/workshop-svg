import React, { Component } from 'react'
import SwipeableViews from 'react-swipeable-views';
import LottieWithAnimationControl from './utils/LottieWithAnimationControl';
import * as atmAnimation from './assets/atm-animation.json'

const styles = {
  slide: {
    padding: 15,
    minHeight: 500,
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
    progress: 0,
    percentage: 0,
    isStopped: false,
    isPaused: true,
  }
  handleSwitching = (index, type) => {
    const progress = Math.trunc(index * 100) % 100
    this.setState({ progress, percentage: progress / 100 })
  }

  handleChangePercentage = (e) => {
    this.setState({
      percentage: e.target.value,
    })
  }

  render() {
    const buttonStyle = {
      display: 'block',
      margin: '10px auto'
    };

    const defaultOptions = {
      loop: false,
      autoplay: false,
      animationData: atmAnimation,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return (
      <div>
        <h1>Progress: { this.state.progress }%</h1>
        <h1>Percentage: { this.state.percentage }%</h1>
        <div className="absolute z-999 ma7" style={ { pointerEvents: 'none' } }>
          <LottieWithAnimationControl options={defaultOptions}
            height={400}
            width={400}
            percentage={this.state.percentage}
            isStopped={this.state.isStopped}
            isPaused={this.state.isPaused}
          />
        </div>
        <input type="range" step="0.001" max="1" min="0" defaultValue="0" value={this.state.percentage} onChange={this.handleChangePercentage} />
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
