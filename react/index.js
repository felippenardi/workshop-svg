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
    isPaused: true,
    startPosition: 0,
    endPosition: 21,
    direction: 1,
  }

  componentDidMount() {
    this.setState({ isPaused: false })
  }

  handleSwitching = (index, type) => {
    if (index === 0) {
      this.setState((state) => {
        return {
          startPosition: state.endPosition,
          direction: state.endPosition < 21 ? 1 : -1,
          endPosition: 21,
        }
      })
      return
    }
    if (index === 1) {
      this.setState((state) => {
        return {
          startPosition: state.endPosition,
          direction: state.endPosition < 35 ? 1 : -1,
          endPosition: 35,
        }
      })
      return
    }
    if (index === 2) {
      this.setState((state) => {
        return {
          startPosition: state.endPosition,
          direction: state.endPosition < 60 ? 1 : -1,
          endPosition: 60,
        }
      })
      return
    }
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
        <div className="absolute z-999 ma7" style={ { pointerEvents: 'none' } }>
          <LottieWithAnimationControl options={defaultOptions}
            height={400}
            width={400}
            direction={this.state.direction}
            segments={[this.state.startPosition, this.state.endPosition]}
            forceSegments={true}
            isPaused={this.state.isPaused}
          />
        </div>
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
