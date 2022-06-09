import React from 'react'
import { COMMON_INPUT_CLASSES } from './utils'

export const Text = ({ prop, blockProps, setBlockProps }) => {
  return (
    <input
      type="text"
      className={`${COMMON_INPUT_CLASSES} text-gray-900 bg-gray-200`}
      value={blockProps[prop.name]}
      onChange={evt =>
        setBlockProps(prev => ({ ...prev, [prop.name]: evt.target.value }))
      }
    />
  )
}
