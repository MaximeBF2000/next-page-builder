import React from 'react'
import { isEmpty, genId } from '@utils/index'
import { SelectorIcon, TrashIcon } from '@heroicons/react/solid'

export const BlockList = ({ contentBlocks, removeBlock }) => {
  return (
    <div data-name="block-list">
      <h3 className="text-2xl mb-5">Blocks</h3>
      {isEmpty(contentBlocks) ? (
        <p data-name="no-blocks" className="italic text-gray-300">
          There is currently no block.
        </p>
      ) : (
        <ul className="flex flex-col gap-2">
          {contentBlocks.map(block => (
            <li
              key={genId()}
              className="cursor-pointer flex px-3 py-1 w-full bg-gray-700 rounded select-none gap-3 justify-between items-center hover:bg-gray-800 focus:bg-gray-800 active:bg-gray-900"
            >
              <span>{block.name}</span>
              <div className="flex gap-1">
                <SelectorIcon className="w-5 h-5 cursor-move" />
                <TrashIcon
                  className="w-5 h-5 text-red-500"
                  onClick={() => removeBlock(block.id)}
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
