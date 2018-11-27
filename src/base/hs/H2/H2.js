import PropTypes from 'prop-types'
import styled from 'styled-components'

import styling from '../../../styling'

const getColor = props =>
  props.red ? styling.colors.redAccent : styling.colors.text

const H2 = styled.h2`
  font-family: ${styling.variables.font};
  font-size: 32px;
  font-weight: 600;
  line-height: 1;
  color: ${getColor};
  margin: 0px;
`

H2.propTypes = {
  red: PropTypes.bool
}

export default H2
