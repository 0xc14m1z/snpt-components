import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import FormatDate from '../FormatDate'

class ShortDate extends PureComponent {
  static propTypes = {
    date: PropTypes.instanceOf(Date).required
  }

  render() {
    return <FormatDate date={this.props.date} format="DD-MM-YYYY" />
  }
}

export default ShortDate
