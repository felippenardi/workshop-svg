import Lottie from 'react-lottie'

export default class LottieWithAnimationControl extends Lottie {
  static propTypes = {
    ...Lottie.propTypes,
    percentage: PropTypes.number,
  }

  playSegments() {
    // this.anim.playSegments([1,50], true); 
    this.anim.playSegments(this.props.segments, true);
  }

  componentDidUpdate(prevProps, prevState, prevContext) {
    if (super.componentDidUpdate) {
      super.componentDidUpdate(prevProps, prevState, prevContext)
    }

    if (this.props.percentage !== prevProps.percentage && this.anim.totalFrames) {
      if (window && !window.anim) {
        window.anim = this.anim
      }
      const frame = Math.round(this.anim.totalFrames * this.props.percentage)
      this.anim.goToAndStop(frame, true)
      // this.anim.playSegments([1,50], true); 
      // this.anim.playSegments([this.anim.currentFrame, frame], true)
    }
  }
}
