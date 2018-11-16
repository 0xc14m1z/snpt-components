import React from 'react'
import { storiesOf } from '@storybook/react'

import FaIcon from './FaIcon'

storiesOf('Base/FaIcon', module)
  .add('standard', () => <FaIcon name="exclamation-circle" />)
  .add('with size', () => <FaIcon name="exclamation-triangle" size="5x" />)
  .add('light', () => <FaIcon name="exclamation-square" />)
  .add('regular', () => <FaIcon name="exclamation-square" weight="far" />)
  .add('solid', () => <FaIcon name="exclamation-square" weight="fas" />)
