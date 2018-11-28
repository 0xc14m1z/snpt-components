import React from 'react'
import { storiesOf } from '@storybook/react'

import VerticalSeparator from './VerticalSeparator'

storiesOf('Layout/VerticalSeparator', module)
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
  .add('standard', () => <VerticalSeparator />)
