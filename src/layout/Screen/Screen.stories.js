import React from 'react'
import { storiesOf } from '@storybook/react'

import Screen from './Screen'

storiesOf('Layout/Screen', module).add('standard', () => (
  <Screen>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget
      malesuada est. Nulla consequat iaculis est, et imperdiet orci. Interdum et
      malesuada fames ac ante ipsum primis in faucibus. Curabitur et ante
      finibus, auctor augue vel, tincidunt sem. Duis id arcu risus. Nulla eget
      ullamcorper nunc. Mauris convallis neque quis ipsum efficitur ullamcorper.
      Ut lorem urna, interdum eu hendrerit non, vestibulum non massa. Sed
      tristique risus ut erat efficitur tempor vitae vitae tellus. Praesent
      scelerisque felis eget lorem tempus, quis molestie tortor laoreet. Nam non
      justo lectus. Nunc ante tortor, porttitor et tempus sed, euismod sit amet
      augue. Orci varius natoque penatibus et magnis dis parturient montes,
      nascetur ridiculus mus. Duis diam odio, varius sed bibendum maximus,
      accumsan pulvinar sapien. Nam euismod, enim id ultricies auctor, lorem
      tortor rutrum turpis, maximus aliquam sem purus at nisl.
    </p>
  </Screen>
))
