import React from 'react'
import { storiesOf } from '@storybook/react'

import ShortDate from './ShortDate'

storiesOf('Base/dates/ShortDate', module)
  .add('standard', () => <ShortDate />)
  .add('with custom date', () => <ShortDate date={new Date(1989, 4, 22)} />)
