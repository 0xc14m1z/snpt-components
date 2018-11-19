import React from 'react'
import { storiesOf } from '@storybook/react'

import FaIcon from './FaIcon'

storiesOf('Base/FaIcon', module)
  .add('standard', () => <FaIcon name="exclamation-circle" />)
  .add('with size', () => (
    <FaIcon name="exclamation-triangle" size={FaIcon.sizes.X5} />
  ))
  .add('implicit light', () => <FaIcon name="exclamation-square" />)
  .add('explicit light', () => (
    <FaIcon name="exclamation-square" weight={FaIcon.weights.LIGHT} />
  ))
  .add('regular', () => (
    <FaIcon name="exclamation-square" weight={FaIcon.weights.REGULAR} />
  ))
  .add('solid', () => (
    <FaIcon name="exclamation-square" weight={FaIcon.weights.SOLID} />
  ))
