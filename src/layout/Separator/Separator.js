import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import styling from '../../styling'

const getWidth = props => (props.vertical ? '2px' : '100%')

const Separator = styled.hr`
  margin: 0px;
  border: none;
  background: ${styling.colors.background};

  width: ${getWidth};
  height: ${styling.gutters.rg};
`

Separator.propTypes = {
  vertical: PropTypes.bool
}

export default React.memo(Separator)
