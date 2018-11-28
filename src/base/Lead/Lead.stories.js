import React from 'react'
import { storiesOf } from '@storybook/react'

import Lead from './Lead'

storiesOf('Base/Lead', module)
  .add('standard', () => <Lead>Lorem ipsum dolor sit amet</Lead>)
  .add('with other tags', () => (
    <Lead>
      Lorem ipsum <strong>dolor</strong> sit amet, consectetur adipiscing elit.
      Duis fringilla <b>bibendum</b> risus sodales laoreet. Pellentesque{' '}
      <em>semper</em> id neque vitae suscipit. Mauris eu magna <i>viverra</i>,
      aliquam sapien at, porta odio.
    </Lead>
  ))
