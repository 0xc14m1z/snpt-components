import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

class FormatDate extends PureComponent {
  static defaultProps = {
    format: 'DD-MM-YYYY'
  }

  static propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
    format: PropTypes.string
  }

  render() {
    const { date, format } = this.props
    return moment(date).format(format)
  }
}

export default FormatDate
