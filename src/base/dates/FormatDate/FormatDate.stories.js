import React from 'react'
import { storiesOf } from '@storybook/react'

import FormatDate from './FormatDate'

storiesOf('Base/dates/FormatDate', module)
  .add('standard', () => <FormatDate date={new Date(1989, 4, 22)} />)
  .add('with custom format', () => (
    <FormatDate date={new Date(1989, 4, 22)} format="MMMM Do YYYY, h:mm:ss a" />
  ))
