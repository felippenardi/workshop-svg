import Lottie from 'react-lottie'

export default class LottieWithAnimationControl extends Lottie {
  static propTypes = {
    ...Lottie.propTypes,
    percentage: PropTypes.number,
  }

  componentDidUpdate(prevProps, prevState, prevContext) {
    if (super.componentDidUpdate) {
      super.componentDidUpdate(prevProps, prevState, prevContext)
    }

    if (this.props.percentage !== prevProps.percentage && this.anim.totalFrames) {
      const frame = Math.round(this.anim.totalFrames * this.props.percentage)
      this.anim.goToAndStop(frame, true)
    }
  }
}
