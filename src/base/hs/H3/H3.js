import PropTypes from 'prop-types'
import styled from 'styled-components'

import styling from '../../../styling'

const getColor = props =>
  props.red ? styling.colors.redAccent : styling.colors.text

const H3 = styled.h3`
  font-family: ${styling.variables.font};
  font-size: 24px;
  font-weight: 400;
  line-height: 1;
  margin: 0px;
  color: ${getColor};
`

H3.propTypes = {
  red: PropTypes.bool
}

export default H3
