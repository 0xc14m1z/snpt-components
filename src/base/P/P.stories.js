import React from 'react'
import { storiesOf } from '@storybook/react'

import P from './P'

storiesOf('Base/P', module)
  .add('standard', () => <P>Lorem ipsum dolor sit amet</P>)
  .add('with other tags', () => (
    <P>
      Lorem ipsum <strong>dolor</strong> sit amet, consectetur adipiscing elit.
      Duis fringilla <b>bibendum</b> risus sodales laoreet. Pellentesque{' '}
      <em>semper</em> id neque vitae suscipit. Mauris eu magna <i>viverra</i>,
      aliquam sapien at, porta odio.
    </P>
  ))
