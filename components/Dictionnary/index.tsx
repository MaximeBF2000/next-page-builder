import React from 'react'
import { Select } from './Select.component'
import { Text } from './Text.component'

export const Dictionnary = props => {
  switch (props.prop.type) {
    case 'text':
      return <Text {...props} />
    case 'select':
      return <Select {...props} />
    default:
      return <div>Dictionnary</div>
  }
}
