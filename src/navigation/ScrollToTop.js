import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

class ScrollToTop extends PureComponent {
  static propTypes = {
    children: PropTypes.element.isRequired
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      if (this.props.animate) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        window.scrollTo(0, 0)
      }
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop)
