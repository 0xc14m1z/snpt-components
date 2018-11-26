import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import styling from '../../styling'

const SVG = styled.svg`
  position: absolute;
  top: 0px;
  left: 0px;

  width: 100%;
  max-width: 950px;

  polygon {
    fill: ${styling.colors.redAccent};
  }
`

const Entire = () => (
  <SVG viewBox="0 0 100 100">
    <polygon points="0,0 100,0 0,100" />
  </SVG>
)

const Cutter = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;

  width: 100%;
  height: 220px;

  overflow: hidden;
`

const Cutted = () => (
  <Cutter>
    <Entire />
  </Cutter>
)

class RedCut extends PureComponent {
  static propTypes = {
    cutted: PropTypes.bool
  }

  render() {
    return this.props.cutted ? <Cutted /> : <Entire />
  }
}

export default RedCut
