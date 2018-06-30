import Lottie from 'react-lottie'

export default class LottieWithAnimationControl extends Lottie {
  static propTypes = {
    ...Lottie.propTypes,
    forceSegments: PropTypes.bool,
  }

  playSegments() {
    this.anim.playSegments(this.props.segments, this.props.forceSegments);
  }
}
