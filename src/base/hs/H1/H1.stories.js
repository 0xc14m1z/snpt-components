import React from 'react'
import { storiesOf } from '@storybook/react'

import H1 from './H1'

storiesOf('Base/Hs/H1', module)
  .addDecorator(story => (
    <div
      style={{
        background: '#484848',
        padding: '20px'
      }}
    >
      {story()}
    </div>
  ))
  .add('standard', () => <H1>Lorem ipsum dolor sit amet</H1>)
  .add('multiline', () => (
    <H1>
      Lorem
      <br />
      ipsum
      <br />
      dolor
      <br />
      sit
      <br />
      amet
    </H1>
  ))
