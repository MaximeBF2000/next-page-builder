import React from 'react'
import { useContentEditionContext } from '@contexts/index'

export const Block = ({ blockId, children }) => {
  const { removeBlock } = useContentEditionContext()

  return (
    <div className="group relative hover:outline focus:outline focus-within:outline outline-offset-[-3px] outline-blue-700 outline-1">
      <button
        data-name="deleteBlockButton"
        className="p-1 bg-red-600 text-white cursor-pointer aspect-square rounded text-xs absolute top-1 right-1 hidden group-hover:block opacity-70 hover:opacity-100 select-none"
        onClick={() => removeBlock(blockId)}
      >
        ╳
      </button>
      {children}
    </div>
  )
}
