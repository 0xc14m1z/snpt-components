import React from 'react'
import { storiesOf } from '@storybook/react'

import Separator from './Separator'

storiesOf('Layout/Separator', module)
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
  .add('horizontal', () => <Separator />)
  .add('vertical', () => <Separator vertical />)
