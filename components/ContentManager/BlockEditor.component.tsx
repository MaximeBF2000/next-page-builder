import React from 'react'
import { Dictionnary } from '@components/blocks'
import { genId } from '@utils/string.utils'

export const BlockEditor = ({ selectedBlock, blockProps, setBlockProps }) => {
  return (
    <div data-name="selectedBlock">
      <div className="mb-10">
        <h2 data-name="title" className="text-4xl">
          {selectedBlock?.name}
        </h2>
        <div data-name="label" className="text-xl text-gray-300 italic">
          {selectedBlock?.label}
        </div>
      </div>
      <ul data-name="props" className="flex flex-col gap-8">
        {selectedBlock?.props?.map(prop => (
          <li key={genId()} data-name="prop">
            <h3 className="text-xl">{prop?.title}</h3>
            <p className="italic text-sm mb-3">{prop?.label}</p>
            <Dictionnary
              selectedBlockId={selectedBlock.id}
              prop={prop}
              blockProps={blockProps}
              setBlockProps={setBlockProps}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
