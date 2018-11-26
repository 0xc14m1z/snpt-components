import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import styling from '../../styling'
import Font from '../Font'

const Styled = styled.p`
  margin: 0px 0px ${styling.gutters.sm} 0px;
  padding: 0px;

  font-family: ${styling.variables.font};
  font-weight: normal;
  color: ${styling.colors.text};
  font-size: 16px;
  line-height: 24px;

  &.italic {
    font-family: ${styling.variables.font};
    font-style: italic;
  }

  i,
  em {
    font-style: italic;
  }

  strong,
  b {
    font-weight: bold;
  }

  a {
    display: inline-block;
    color: ${styling.colors.red};
    text-decoration: none;

    &:hover {
      color: ${styling.colors.redAccent};
      text-decoration: underline;
    }

    i {
      margin-right: ${styling.gutters.xs};
    }
  }
`

class P extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired
  }

  render() {
    return (
      <Font>
        <Styled {...this.props} />
      </Font>
    )
  }
}

export default P
