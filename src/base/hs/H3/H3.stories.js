import React from 'react'
import { storiesOf } from '@storybook/react'

import H3 from './H3'

storiesOf('Base/Hs/H3', module)
  .add('standard', () => <H3>Lorem ipsum dolor sit amet</H3>)
  .add('red', () => <H3 red>Lorem ipsum dolor sit amet</H3>)
  .add('italic', () => <H3 italic>Lorem ipsum dolor sit amet</H3>)
  .add('red italic', () => (
    <H3 red italic>
      Lorem ipsum dolor sit amet
    </H3>
  ))
