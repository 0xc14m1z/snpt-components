import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import styling from '../../styling'
import P from '../../base/P'
import FaIcon from '../../base/FaIcon'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Main = styled.div`
  display: flex;
`

const Icon = styled(FaIcon)`
  font-size: 60px;
  margin-right: ${styling.gutters.md};
  color: ${styling.colors.red};
`

const Label = styled(P)`
  color: ${styling.colors.red};
  font-style: italic;
  font-size: 12px;
  line-height: 1;
  text-transform: uppercase;
  margin-bottom: 0px;
`

const Number = styled(P)`
  font-size: 50px;
  line-height: 50px;
  font-weight: 600;
  margin-bottom: 0px;
`

const Footer = styled(P)`
  margin-bottom: 0px;
`

const HighlightedNumber = ({ icon, label, number, footer }) => (
  <Container>
    <Main>
      <Icon name={icon} />
      <Container>
        <Label>{label}</Label>
        <Number>{number}</Number>
      </Container>
    </Main>
    {footer && <Footer>{footer}</Footer>}
  </Container>
)

HighlightedNumber.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  footer: PropTypes.string
}

export default React.memo(HighlightedNumber)
