import React from 'react'
import { storiesOf } from '@storybook/react'

import Logo from './Logo'

storiesOf('Layout/Logo', module)
  .add('standard', () => <Logo />)
  .add('full', () => <Logo full />)
