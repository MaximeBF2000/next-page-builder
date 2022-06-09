import React from 'react'
import type { ChangeEventHandler } from 'react'
import { genId } from '@utils/index'
import { useContentEditionContext } from '@contexts/index'

const commonInputClasses =
  'p-1 rounded w-full outline-none focus focus:ring-2 ring-sky-500'

export const Dictionnary = ({
  selectedBlockId,
  prop,
  blockProps,
  setBlockProps
}) => {
  const { updateBlock } = useContentEditionContext()

  const updateBlockWithEventValue: ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = evt => {
    setBlockProps(prev => ({ ...prev, [prop.name]: evt.target.value }))
    updateBlock(selectedBlockId, { props: { [prop.name]: evt.target.value } })
    console.log('updated block props')
  }

  switch (prop.type) {
    case 'text':
      return (
        <input
          type="text"
          className={`${commonInputClasses} text-gray-900 bg-gray-200`}
          value={blockProps[prop.name]}
          onChange={updateBlockWithEventValue}
        />
      )
    case 'select':
      return (
        <select
          className={`${commonInputClasses} mb-2 bg-gray-200 text-gray-900`}
          value={prop?.defaultOption}
          onChange={updateBlockWithEventValue}
        >
          {!prop?.defaultOption && <option value="">Select option</option>}
          {prop?.options.map(option => (
            <option key={genId()} value={option}>
              {option}
            </option>
          ))}
        </select>
      )
    case 'color':
      return (
        <div>
          <input
            type="color"
            className={`${commonInputClasses} h-10 p-0 bg-transparent border-1`}
            value={prop?.defaultOption}
            onChange={updateBlockWithEventValue}
          />
          <div className="mt-3 flex h-10 gap-1 items-center">
            <p className="flex-1 text-xl text-gray-300">
              {blockProps[prop.name]?.toUpperCase() || '#000000'}
            </p>
            <div
              className="w-16 h-full rounded"
              style={{ backgroundColor: blockProps[prop.name] || '#000' }}
            />
          </div>
        </div>
      )
    default:
      return <div>Dictionnary</div>
  }
}
