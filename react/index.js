import React, { Component } from 'react'
import SwipeableViews from 'react-swipeable-views'
import LottieWithAnimationControl from './utils/LottieWithAnimationControl'
import * as onboardingAnimation from './assets/onboarding-animation.json'
import Pagination from './components/Pagination'

const styles = {
  slide: {
    padding: 15,
    height: '100vh',
    color: '#fff',
  },
  slide1: {
    background: '#6AC0FF',
  },
  slide2: {
    background: '#B3DC4A',
  },
  slide3: {
    background: '#FEA900',
  },
}

export default class Welcome extends Component {
  state = {
    isPaused: true,
    startPosition: 0,
    endPosition: 30,
    direction: 1,
    index: 0,
  }

  componentDidMount() {
    this.setState({ isPaused: false })
  }

  handleChangeIndex = (index) => {
    const animationEndPositionByIndex = {
      0: 30,
      1: 60,
      2: 90,
    }

    const goToPosition = (position) => {
      return this.setState((state) => {
        return {
          startPosition: state.endPosition,
          direction: state.endPosition < position ? 1 : -1,
          endPosition: position,
          index,
        }
      })
    }

    if (animationEndPositionByIndex[index]) {
      goToPosition(animationEndPositionByIndex[index])
    }
  }

  render() {
    const buttonStyle = {
      display: 'block',
      margin: '10px auto'
    }

    const defaultOptions = {
      loop: false,
      autoplay: false,
      animationData: onboardingAnimation,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }

    return (
      <div>
        <div
          className="absolute z-999 left-0 right-0"
          style={ { pointerEvents: 'none', top: '8rem' } }
        >
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <LottieWithAnimationControl options={defaultOptions}
              direction={this.state.direction}
              segments={[this.state.startPosition, this.state.endPosition]}
              forceSegments={true}
              isPaused={this.state.isPaused}
            />
          </div>
        </div>
        <div className="aspect-ratio--object">
          <SwipeableViews
            enableMouseEvents={true}
            index={this.state.index}
            onChangeIndex={this.handleChangeIndex}
          >
            <div style={Object.assign({}, styles.slide, styles.slide1)}>
              <div className="tc top-2 relative w-100" style={{ top: '25rem'}}>
                <h1 className="mb0">Ilustre</h1>
                <p className="mt0">Use o Sketch para ilustrar</p>
              </div>
            </div>
            <div style={Object.assign({}, styles.slide, styles.slide2)}>
              <div className="tc top-2 relative w-100" style={{ top: '25rem'}}>
                <h1 className="mb0">Anime</h1>
                <p className="mt0">Use o After Effects para animar</p>
              </div>
            </div>
            <div style={Object.assign({}, styles.slide, styles.slide3)}>
              <div className="tc top-2 relative w-100" style={{ top: '25rem'}}>
                <h1 className="mb0">Programe</h1>
                <p className="mt0">Controle a animação no React</p>
              </div>
            </div>
          </SwipeableViews>
        </div>
        <Pagination
          index={this.state.index}
          onChangeIndex={this.handleChangeIndex}
        />
      </div>
    )
  }
}
