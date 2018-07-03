import React, { Component } from 'react'
import SwipeableViews from 'react-swipeable-views'
import Pagination from './components/Pagination'
import AnimationPlaceholder from './components/AnimationPlaceholder'
import Step from './components/Step'
import Lottie from './utils/LottieWithAnimationControl'
import onboardingAnimation from './assets/onboarding-animation.json'

const animationKeyframes = {
 0: 30,
 1: 60,
 2: 90,
}

export default class Welcome extends Component {
  state = {
    index: 0,
    isPaused: true,
    startPosition: 0,
    endPosition: animationKeyframes[0],
  }

  handleChangeIndex = (index) => {
    const newPosition = animationKeyframes[index]
    if (!newPosition) { return }

    this.setState((state) => {
      return {
        index,
        startPosition: state.endPosition,
        endPosition: newPosition,
      }
    })
  }

  componentDidMount() {
    this.setState({
      isPaused: false,
    })
  }

  render() {
    const options = {
      animationData: onboardingAnimation,
      loop: false,
      autoplay: false,
    }

    return (
      <div>
        <AnimationPlaceholder>
          <Lottie
            options={options}
            segments={[this.state.startPosition, this.state.endPosition]}
            forceSegments={true}
            isPaused={this.state.isPaused}
          />
        </AnimationPlaceholder>

        <div className="aspect-ratio--object">
          <SwipeableViews
            enableMouseEvents={true}
            index={this.state.index}
            onChangeIndex={this.handleChangeIndex}
          >
            <Step index={0}>
              <h1 className="mb0">Title 1</h1>
              <p className="mt0">Description 1</p>
            </Step>
            <Step index={1}>
              <h1 className="mb0">Title 2</h1>
              <p className="mt0">Description 2</p>
            </Step>
            <Step index={2}>
              <h1 className="mb0">Title 3</h1>
              <p className="mt0">Description 3</p>
            </Step>
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
