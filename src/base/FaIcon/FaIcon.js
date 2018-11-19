import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './FaIcon.scss'

const LIGHT = 'fal'
const REGULAR = 'far'
const SOLID = 'fas'
const BRAND = 'fab'

const XS = 'xs'
const SM = 'sm'
const LG = 'lg'
const X2 = '2x'
const X3 = '3x'
const X5 = '5x'
const X7 = '7x'
const X10 = '10x'

export default class FaIcon extends PureComponent {
  static defaultProps = {
    weight: LIGHT
  }

  static propTypes = {
    weight: PropTypes.oneOf(Object.values(FaIcon.weights)),
    name: PropTypes.string.isRequired,
    size: PropTypes.oneOf(Object.values(FaIcon.sizes)),
    className: PropTypes.string
  }

  static weights = {
    LIGHT,
    REGULAR,
    SOLID,
    BRAND
  }

  static sizes = {
    XS,
    SM,
    LG,
    X2,
    X3,
    X5,
    X7,
    X10
  }

  render() {
    const { weight, name, size, className } = this.props

    return (
      <i
        className={classNames(
          'icon',
          weight,
          `fa-${name}`,
          size ? `fa-${size}` : null,
          className
        )}
      />
    )
  }
}
