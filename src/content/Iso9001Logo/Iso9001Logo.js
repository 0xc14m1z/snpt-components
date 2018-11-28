import React from 'react'
import styled from 'styled-components'

import logo from './assets/iso9001-logo.png'

const Img = styled.img`
  width: 102px;
`

const alt = `
  Scuola Nazionale Personal Trainer è il primo istituto 
  italiano di formazione specializzato nel personal training 
  ad ottenere la Certificazione di Qualità UNI EN ISO 9001:2015.
`
const Iso9001Logo = () => <Img src={logo} alt={alt} />

export default React.memo(Iso9001Logo)
