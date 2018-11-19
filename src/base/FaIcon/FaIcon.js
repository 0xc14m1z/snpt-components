import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './FaIcon.scss'

const LIGHT = 'fal'
const REGULAR = 'far'
const SOLID = 'fas'
const BRAND = 'fab'
const weights = { LIGHT, REGULAR, SOLID, BRAND }

const XS = 'xs'
const SM = 'sm'
const LG = 'lg'
const X2 = '2x'
const X3 = '3x'
const X5 = '5x'
const X7 = '7x'
const X10 = '10x'
const sizes = {
  XS,
  SM,
  LG,
  X2,
  X3,
  X5,
  X7,
  X10
}

export default class FaIcon extends PureComponent {
  static defaultProps = {
    weight: LIGHT
  }

  static propTypes = {
    weight: PropTypes.oneOf(Object.values(weights)),
    name: PropTypes.string.isRequired,
    size: PropTypes.oneOf(Object.values(sizes)),
    className: PropTypes.string
  }

  static weights = weights
  static sizes = sizes

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
