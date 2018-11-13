import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import logo from './assets/logo.png'
import logoFull from './assets/logo-full.png'
import logoMobile from './assets/logo-mobile.png'

const SanitizedLink = ({ full, ...props }) => <Link {...props} />

const StyledLink = styled(SanitizedLink)`
  display: inline-block;

  ${({ full }) =>
    full
      ? `
        width: 117px;
        height: 197px;
        background: url(${logoFull});
        background-size: 117px 197px;
      `
      : `
        width: 117px;
        height: 117px;
        background: url(${logo});
        background-size: 117px 117px;
      `}

  @media screen and (max-width: 640px) {
    width: 151px;
    height: 67px;
    background: url(${logoMobile});
    background-size: 117px 197px;
  }
`

const Logo = props => <StyledLink {...props} to="/" title="Home" />

Logo.propTypes = {
  full: PropTypes.bool
}

export default React.memo(Logo)
