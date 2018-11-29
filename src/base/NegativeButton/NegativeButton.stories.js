import React from 'react'
import { storiesOf } from '@storybook/react'

import NegativeButton from './NegativeButton'

storiesOf('Base/NegativeButton', module)
  .add('standard', () => (
    <NegativeButton to="/">NegativeButton text</NegativeButton>
  ))
  .add('with text prop', () => (
    <NegativeButton to="/" text="NegativeButton as text" />
  ))
