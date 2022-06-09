import React from 'react'
import { COMMON_INPUT_CLASSES } from './utils'

export const Color = ({ prop, blockProps, setBlockProps }) => {
  return (
    <div>
      <input
        type="color"
        className={`${COMMON_INPUT_CLASSES} h-10 p-0 bg-transparent border-1`}
        defaultValue="#000"
        value={prop?.defaultOption}
        onChange={evt =>
          setBlockProps(prev => ({
            ...prev,
            [prop?.name]: evt.target.value
          }))
        }
      />
      <div className="mt-3 flex h-10 gap-1 items-center">
        <p className="flex-1 text-xl text-gray-300">
          {blockProps[prop.name]?.toUpperCase()}
        </p>
        <div
          className="w-16 h-full rounded"
          style={{ backgroundColor: blockProps[prop.name] }}
        />
      </div>
    </div>
  )
}
