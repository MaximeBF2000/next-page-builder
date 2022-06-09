import React from 'react'
import { genId } from '@utils/index'
import { COMMON_INPUT_CLASSES } from './utils'

export const Select = ({ prop, setBlockProps }) => {
  return (
    <select
      className={`${COMMON_INPUT_CLASSES} mb-2 bg-gray-200 text-gray-900`}
      value={prop?.defaultOption}
      onChange={evt =>
        setBlockProps(prev => ({ ...prev, [prop?.name]: evt.target.value }))
      }
    >
      {!prop?.defaultOption && <option value="">Select option</option>}
      {prop?.options.map(option => (
        <option key={genId()} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}
