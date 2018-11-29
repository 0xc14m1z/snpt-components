import React from 'react'

import Button from '../Button'

const NegativeButton = props => <Button negative {...props} />

export default React.memo(NegativeButton)
