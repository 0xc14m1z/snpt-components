import React from 'react'
import { storiesOf } from '@storybook/react'

import GreenNumber from './GreenNumber'

storiesOf('Content/GreenNumber', module)
  .add('standard', () => <GreenNumber />)
  .add('negative', () => <GreenNumber negative />)
