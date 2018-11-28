import React from 'react'
import styled from 'styled-components'

import logo from './assets/acsi-logo.png'

const Img = styled.img`
  width: 324px;
`

const alt = `
  La Scuola è affiliata all'ACSI, ente nazionale di promozione sportiva
  riconosciuto dal CONI e dal Ministero dell'Interno.
`
const AcsiLogo = () => <Img src={logo} alt={alt} />

export default React.memo(AcsiLogo)
