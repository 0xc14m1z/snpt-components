import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import styling from '../../styling'
import Font from '../../base/Font'

const StyledLink = styled(NavLink)`
  display: inline-block;
  padding-bottom: ${styling.gutters.sm};
  font-family: ${styling.variables.font};
  text-transform: uppercase;
  color: white;
  text-decoration: none;
  border-bottom: 2px solid transparent;

  &:hover,
  &.active {
    border-bottom-color: white;
  }
`

const MenuItem = ({ to = '#', text, ...props }) => (
  <StyledLink {...props} to={to}>
    <Font>{text}</Font>
  </StyledLink>
)

MenuItem.propsTypes = {
  exact: PropTypes.bool,
  to: PropTypes.string,
  text: PropTypes.string.isRequired,
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string
}

export default React.memo(MenuItem)
