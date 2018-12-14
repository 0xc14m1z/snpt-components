import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import styling from '../../styling'
import MenuItem from '../MenuItem'

const Background = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9;
`

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
  z-index: 10;
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
  <>
    <Background onClick={onClose} />
    <Container>
      {React.Children.map(children, child => (
        <SubMenuItem {...child.props} onClick={onClose} />
      ))}
    </Container>
  </>
)

SubMenu.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

export default React.memo(SubMenu)
