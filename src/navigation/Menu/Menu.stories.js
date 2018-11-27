import React from 'react'
import { storiesOf } from '@storybook/react'

import Menu from './Menu'
import MenuItem from '../MenuItem'

storiesOf('Navigation/Menu', module)
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
  .add('with one item', () => (
    <Menu>
      <MenuItem to="/" text="First" />
    </Menu>
  ))
  .add('with many items', () => (
    <Menu>
      <MenuItem to="/1" text="First" />
      <MenuItem to="/2" text="Second" />
      <MenuItem to="/3" text="Third" />
      <MenuItem to="/4" text="Fourth" />
    </Menu>
  ))
