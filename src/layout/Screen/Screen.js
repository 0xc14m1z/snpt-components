import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import styling from '../../styling'

const Container = styled.div`
  margin: auto;

  box-sizing: border-box;
  padding: 0px ${styling.gutters.rg};
  @media ${styling.devices.desktop} {
    padding: 0px ${styling.gutters.rg};
  }

  width: 100%;
  max-width: ${styling.variables.maxScreenWidth};
`

class Screen extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    return <Container>{this.props.children}</Container>
  }
}

export default Screen
