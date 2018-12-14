import React from 'react'
import { storiesOf } from '@storybook/react'

import HighlightedNumber from './HighlightedNumber'

storiesOf('Content/HighlightedNumber', module)
  .add('standard', () => (
    <HighlightedNumber icon="graduation-cap" label="Label" number={1234} />
  ))
  .add('with footer', () => (
    <HighlightedNumber
      icon="graduation-cap"
      label="Label"
      number={1234}
      footer="Footer text"
    />
  ))
