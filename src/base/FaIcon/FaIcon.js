import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './FaIcon.scss'

export const LIGHT = 'fal'
export const REGULAR = 'far'
export const SOLID = 'fas'
export const BRAND = 'fab'

export const weights = [LIGHT, REGULAR, SOLID, BRAND]

export const XS = 'xs'
export const SM = 'sm'
export const LG = 'lg'
export const X2 = '2x'
export const X3 = '3x'
export const X5 = '5x'
export const X7 = '7x'
export const X10 = '10x'

export const sizes = [XS, SM, LG, X2, X3, X5, X7, X10]

const FaIcon = ({ weight, name, size, className }) => (
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

FaIcon.defaultProps = {
  weight: LIGHT
}

FaIcon.propTypes = {
  weight: PropTypes.oneOf(weights),
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(sizes),
  className: PropTypes.string
}

export default React.memo(FaIcon)
