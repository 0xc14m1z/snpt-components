import React from 'react'
import styled from 'styled-components'

import logo from './assets/european-education-logo.png'

const Img = styled.img`
  width: 210px;
`

const alt = `
  Formazione riconosciuta in tutta Europa.
`
const EuropeanEducationLogo = ({ className }) => (
  <Img src={logo} alt={alt} className={className} />
)

export default React.memo(EuropeanEducationLogo)
