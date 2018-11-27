import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import styling from '../../styling'

const Ul = styled.ul`
  margin: 0px;
  padding: 0px;
`

const Li = styled.li`
  display: inline-block;
  margin: 0px ${styling.gutters.md} 0px 0px;
  list-style-type: none;
`

class Menu extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  children = () => React.Children.toArray(this.props.children)

  renderChildren = () => this.children().map(this.renderChild)

  renderChild = (child, index) => <Li key={index}>{child}</Li>

  render() {
    return (
      <nav>
        <Ul>{this.renderChildren()}</Ul>
      </nav>
    )
  }
}

export default Menu
