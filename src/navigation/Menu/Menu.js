import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import styling from '../../styling'
import FaIcon from '../../base/FaIcon'
import MenuItem from '../MenuItem'
import SubMenu from '../SubMenu'

const Ul = styled.ul`
  margin: 0px;
  padding: 0px;
`

const Li = styled.li`
  position: relative;
  display: inline-block;
  margin: 0px ${styling.gutters.md} 0px 0px;
  list-style-type: none;
`

const Toggler = styled(FaIcon)`
  margin-left: 10px;
`

const Up = () => <Toggler name="angle-up" />

const Down = () => <Toggler name="angle-down" />

class Menu extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  state = {
    open: null,
    subItems: null
  }

  children = () => React.Children.toArray(this.props.children)

  renderChildren = () => this.children().map(this.renderChild)

  isOpen = () => !!this.state.open

  open = index =>
    this.setState({
      open: index,
      subItems: this.children()[index].props.children
    })

  close = () => this.setState({ open: null, subItems: null })

  handleToggle = index => (this.isOpen() ? this.close() : this.open(index))

  renderChild = (child, index) => {
    const { text, onClick, ...props } = child.props

    const hasSubItems = !!props.children
    const isOpen = this.state.open === index
    const toggler = isOpen ? <Up /> : <Down />

    const handleClick = event => {
      if (!props.to) {
        event.preventDefault()
        event.stopPropagation()
      }
      if (hasSubItems || (this.isOpen() && this.state.open !== index)) {
        this.handleToggle(index)
      }
      if (onClick) onClick(event)
    }

    return (
      <Li key={index}>
        <MenuItem
          {...props}
          onClick={handleClick}
          text={
            hasSubItems ? (
              <>
                {text}
                {toggler}
              </>
            ) : (
              text
            )
          }
        />
        {isOpen && (
          <SubMenu onClose={() => this.handleToggle(index)}>
            {this.state.subItems}
          </SubMenu>
        )}
      </Li>
    )
  }

  render() {
    return (
      <nav>
        <Ul>{this.renderChildren()}</Ul>
      </nav>
    )
  }
}

export default Menu
