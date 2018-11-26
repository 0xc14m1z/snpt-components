import React, { PureComponent } from 'react'
import Swipe from 'react-id-swiper/lib/custom'

import 'react-id-swiper/src/styles/css/swiper.css'

class Swiper extends PureComponent {
  render() {
    return <Swipe {...this.props} />
  }
}

export default Swiper
