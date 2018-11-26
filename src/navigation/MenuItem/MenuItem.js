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
  text-transform: uppercase;
  color: white;
  text-decoration: none;
  border-bottom: 2px solid transparent;

  &:hover,
  &.active {
    border-bottom-color: white;
  }
`

class MenuItem extends PureComponent {
  static propTypes = {
    exact: PropTypes.bool,
    to: PropTypes.string,
    text: PropTypes.string.isRequired,
    children: PropTypes.node,
    onOpen: PropTypes.func
  }

  hasChildren = () => !!this.props.children

  shouldOpen = () => this.hasChildren() && this.props.onOpen

  open = () => this.props.onOpen(this.props.children)

  handleOpen = event => {
    event.preventDefault()
    event.stopPropagation()
    if (this.shouldOpen()) {
      this.open()
    }
  }

  onClick = () => (this.shouldOpen() ? this.handleOpen : undefined)

  to = () => (this.shouldOpen() ? '#' : this.props.to)

  render() {
    return (
      <StyledLink
        exact={this.props.exact}
        to={this.to()}
        onClick={this.onClick()}
      >
        <Font>{this.props.text}</Font>
      </StyledLink>
    )
  }
}

export default MenuItem
