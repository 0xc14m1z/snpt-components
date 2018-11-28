import React from 'react'
import styled from 'styled-components'

import logo from './assets/ereps-logo.png'

const Img = styled.img`
  width: 204px;
`

const alt = `
  European Register of Excercise Professionals
`
const ErepsLogo = () => <Img src={logo} alt={alt} />

export default React.memo(ErepsLogo)
