import React, { Component } from 'react'
import SwipeableViews from 'react-swipeable-views'
import Pagination from './components/Pagination'
import AnimationPlaceholder from './components/AnimationPlaceholder'
import Step from './components/Step'

export default class Welcome extends Component {
  state = {
    index: 0,
  }

  handleChangeIndex = (index) => {
    this.setState((state) => {
      return {
        index,
      }
    })
  }

  render() {
    return (
      <div>
        <AnimationPlaceholder>
          <img src="http://via.placeholder.com/600x300" />
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
