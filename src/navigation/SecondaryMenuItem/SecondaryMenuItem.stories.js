import React from 'react'
import { storiesOf } from '@storybook/react'

import SecondaryMenuItem from './SecondaryMenuItem'
import FaIcon from './../../base/FaIcon'

storiesOf('Navigation/SecondaryMenuItem', module)
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
  .add('standard', () => (
    <SecondaryMenuItem to="/destination" text="Menu item" />
  ))
  .add('active', () => <SecondaryMenuItem to="/" text="Menu item" />)
  .add('with icon', () => (
    <SecondaryMenuItem
      to="/destination"
      text={
        <>
          <FaIcon name="exclamation-triangle" /> Menu item
        </>
      }
    />
  ))
