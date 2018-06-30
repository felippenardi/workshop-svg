import Lottie from 'react-lottie'

export default class LottieWithAnimationControl extends Lottie {
  static propTypes = {
    ...Lottie.propTypes,
    forceSegments: PropTypes.bool,
  }

  playSegments() {
    this.anim.playSegments(this.props.segments, this.props.forceSegments);
  }

  componentDidUpdate(prevProps, prevState, prevContext) {
    if (super.componentDidUpdate) {
      super.componentDidUpdate(prevProps, prevState, prevContext)
    }

    if (window && !window.anim) {
      window.anim = this.anim
    }
  }
}
