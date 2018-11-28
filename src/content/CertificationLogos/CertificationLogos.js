import React from 'react'
import styled from 'styled-components'

import AcsiLogo from '../AcsiLogo'
import EuropeanEducationLogo from '../EuropeanEducationLogo'
import ErepsLogo from '../ErepsLogo'
import Iso9001Logo from '../Iso9001Logo'
import VerticalSeparator from '../../layout/VerticalSeparator'

const Container = styled.div`
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

const StyledEuropeanEducationLogo = styled(EuropeanEducationLogo)`
  margin-bottom: 10px;
`

const CertificationLogos = () => (
  <Container>
    <AcsiLogo />
    <VerticalSeparator />
    <StyledEuropeanEducationLogo />
    <VerticalSeparator />
    <ErepsLogo />
    <VerticalSeparator />
    <Iso9001Logo />
  </Container>
)

export default React.memo(CertificationLogos)
