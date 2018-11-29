import PropTypes from 'prop-types'
import styled from 'styled-components'

import styling from '../../styling'

const getBackgroundColor = props => {
  if (props.red) return styling.colors.red
  if (props.dark) return styling.colors.text
  return 'white'
}

const getColor = props =>
  props.red || props.dark ? 'white' : styling.colors.text

const Section = styled.div`
  padding: ${styling.gutters.rg};
  background: ${getBackgroundColor};
  color: ${getColor};

  @media ${styling.devices.laptop} {
    padding: ${styling.gutters.lg};
  }
`

Section.propTypes = {
  red: PropTypes.bool,
  dark: PropTypes.bool
}

export default Section
