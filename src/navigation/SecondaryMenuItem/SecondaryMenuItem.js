import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import styling from '../../styling'
import Font from '../../base/Font'

const StyledLink = styled(NavLink)`
  display: inline-block;
  padding-bottom: ${styling.gutters.sm};
  font-family: ${styling.variables.font};
  color: white;
  text-decoration: none;
  border-bottom: 2px solid transparent;

  &:hover,
  &.active {
    border-bottom-color: white;
  }
`

class SecondaryMenuItem extends PureComponent {
  static propTypes = {
    exact: PropTypes.bool,
    to: PropTypes.string.isRequired,
    text: PropTypes.node.isRequired
  }

  render() {
    return (
      <StyledLink exact={this.props.exact} to={this.props.to}>
        <Font>{this.props.text}</Font>
      </StyledLink>
    )
  }
}

export default SecondaryMenuItem
