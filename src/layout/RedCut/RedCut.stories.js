import React from 'react'
import { storiesOf } from '@storybook/react'

import RedCut from './RedCut'

storiesOf('Layout/RedCut', module)
  .addDecorator(story => (
    <div
      style={{
        position: 'relative',
        width: '100%'
      }}
    >
      {story()}
    </div>
  ))
  .add('entire', () => <RedCut />)
  .add('cutted', () => <RedCut cutted />)
