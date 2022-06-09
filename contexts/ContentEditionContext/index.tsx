import React, { useState, createContext, useContext } from 'react'
import { arrayPush, filter, updateItemInArray } from '@utils/index'

interface IContentEditionContext {
  blocks: any[]
  addBlock: (block: any) => void
  removeBlock: (blockId: any) => void
  updateBlock: (blockId: any, payload: any) => void
}

const ContentEditionContext = createContext<IContentEditionContext>({
  blocks: [],
  addBlock: () => {},
  removeBlock: () => {},
  updateBlock: () => {}
})

export const ContentEditionContextProvider = ({
  children
}: {
  children: any
}) => {
  const [blocks, setBlocks] = useState<any[]>([])

  const addBlock = newBlock =>
    setBlocks(prevState => arrayPush(prevState, newBlock))

  const removeBlock = blockId =>
    setBlocks(prevState => filter(prevState, block => block?.id !== blockId))

  const updateBlock = (blockId, updatePayload) =>
    setBlocks(prevState => {
      const block = prevState.find(block => block?.id === blockId)
      const blockIndex = prevState.findIndex(block => block?.id === blockId)
      return updateItemInArray(prevState, blockIndex, {
        ...block,
        ...updatePayload
      })
    })

  return (
    <ContentEditionContext.Provider
      value={{
        blocks,
        addBlock,
        removeBlock,
        updateBlock
      }}
    >
      {children}
    </ContentEditionContext.Provider>
  )
}

export const useContentEditionContext = () => useContext(ContentEditionContext)
