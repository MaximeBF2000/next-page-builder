import { ArrowLeftIcon } from '@heroicons/react/solid'
import React from 'react'

export const Header = ({
  selectedBlock,
  clearSelectedBlockId,
  toggleIsOpen
}) => {
  return (
    <header className="mb-10 flex h-10 border-b border-b-gray-100 gap-3 items-center">
      {selectedBlock && (
        <ArrowLeftIcon
          className="w-5 h-5 cursor-pointer"
          onClick={clearSelectedBlockId}
        />
      )}
      <span className="text-xl select-none">
        {selectedBlock
          ? `Edit block: ${selectedBlock?.name}`
          : 'Blocks structure'}
      </span>
      <span
        className="ml-auto text-l cursor-pointer select-none"
        onClick={toggleIsOpen}
      >
        ╳
      </span>
    </header>
  )
}
