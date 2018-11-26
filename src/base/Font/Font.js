import { Component } from 'react'
import PropTypes from 'prop-types'

import './Font.scss'

class Font extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    return this.props.children
  }
}

export default Font
