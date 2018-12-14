import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import SubMenu from './SubMenu'
import MenuItem from '../MenuItem'

storiesOf('Navigation/SubMenu', module)
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
    <SubMenu onClose={action('onClose')}>
      <MenuItem to="/" text="First" />
    </SubMenu>
  ))
  .add('with many items', () => (
    <SubMenu onClose={action('onClose')}>
      <MenuItem to="/1" text="First" />
      <MenuItem to="/2" text="Second" />
      <MenuItem to="/3" text="Third" />
      <MenuItem to="/4" text="Fourth" />
    </SubMenu>
  ))
