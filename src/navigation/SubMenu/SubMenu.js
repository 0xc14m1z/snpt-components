import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import styling from '../../styling'
import MenuItem from '../MenuItem'

const Container = styled.div`
  position: absolute;
  top: 100%;
  left: 0px;
  margin-top: ${styling.gutters.md};
  background: white;
  padding: ${styling.gutters.rg};
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 280px;
  box-sizing: border-box;
`

const SubMenuItem = styled(MenuItem)`
  display: inline-block;
  margin-bottom: ${styling.gutters.sm};
  &:last-child {
    margin-bottom: 0px;
  }
  color: ${styling.colors.text};
  border-bottom-color: transparent;
  &.active,
  &:hover {
    border-bottom-color: ${styling.colors.text};
  }
`

const SubMenu = ({ children, onClose }) => (
  <Container>
    {React.Children.map(children, child => (
      <SubMenuItem {...child.props} onClick={onClose} />
    ))}
  </Container>
)

SubMenu.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

export default React.memo(SubMenu)
