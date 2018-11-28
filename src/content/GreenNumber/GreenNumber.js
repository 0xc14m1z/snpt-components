import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import greenNumber from './assets/green-number.png'
import greenNumberNegative from './assets/green-number-negative.png'

const getWidth = props => (props.negative ? '170px' : '295px')

const Img = styled.img`
  width: ${getWidth};
`

class GreenNumber extends PureComponent {
  static propTypes = {
    negative: PropTypes.bool
  }

  src = () => (this.props.negative ? greenNumberNegative : greenNumber)

  render() {
    return (
      <Img negative={this.props.negative} src={this.src()} alt="800.12.69.84" />
    )
  }
}

export default GreenNumber
