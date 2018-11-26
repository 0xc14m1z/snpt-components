import React from 'react'
import { storiesOf } from '@storybook/react'

import MenuItem from './MenuItem'

storiesOf('Navigation/MenuItem', module)
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
  .add('standard', () => <MenuItem to="/destination" text="Menu item" />)
  .add('active', () => <MenuItem to="/" text="Menu item" />)
