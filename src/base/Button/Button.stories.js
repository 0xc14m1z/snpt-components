import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from './Button'

storiesOf('Base/Button', module)
  .add('standard', () => <Button to="/">Button text</Button>)
  .add('with text prop', () => <Button to="/" text="Button as text" />)
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
  .add('negative', () => (
    <Button negative to="/">
      Button text
    </Button>
  ))
  .add('negative with text prop', () => (
    <Button negative to="/" text="Button as text" />
  ))
