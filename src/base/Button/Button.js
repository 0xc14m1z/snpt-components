import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import styling from '../../styling'

const getColor = props => (props.negative ? 'white' : styling.colors.text)

const getHoverColor = props => (props.negative ? styling.colors.text : 'white')

const SanitizedLink = ({ negative, text, children, ...props }) => (
  <NavLink {...props}>{text || children}</NavLink>
)

const Button = styled(SanitizedLink)`
  display: inline-block;
  padding: 7px 12px 5px 10px;
  font-family: ${styling.variables.font};
  font-size: 14px;
  font-style: italic;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  line-height: 1.2;
  border: 2px solid ${getColor};
  color: ${getColor};
  background: transparent;

  &:hover {
    background: ${getColor};
    color: ${getHoverColor};
  }
`

Button.propTypes = {
  negative: PropTypes.bool,
  text: PropTypes.node
}

export default React.memo(Button)
