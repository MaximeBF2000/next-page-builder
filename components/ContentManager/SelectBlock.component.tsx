import type { ChangeEventHandler } from 'react'
import React from 'react'

export const SelectBlock = ({
  selectedBlockId,
  setSelectedBlockId,
  addNewBlock,
  blocks
}) => {
  const handleSelect: ChangeEventHandler<HTMLSelectElement> = evt => {
    addNewBlock()
    setSelectedBlockId(evt.target.value)
  }

  return (
    <select
      className={`cursor-pointer w-full p-2 outline-none rounded mb-2 ${
        selectedBlockId
          ? 'bg-gray-100 text-gray-900'
          : 'bg-transparent text-gray-400 border border-gray-400'
      }`}
      value={selectedBlockId}
      onChange={handleSelect}
    >
      <option value="">Select a block to add</option>
      {blocks.map(({ id, name }) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </select>
  )
}
