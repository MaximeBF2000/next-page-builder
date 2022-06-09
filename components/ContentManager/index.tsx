import React, { useState, useEffect, MouseEventHandler } from 'react'
import { blocks } from '@components/blocks'
import { useContentEditionContext } from '@contexts/index'
import { genId, omit, useToggle } from '@utils/index'
import { CONTENT_MANAGER_WIDTH } from '@styles/constants'
import getInitialBlockProps from './getInitialBlockProps.util'
import { Header } from './Header.component'
import { ToggleOpenButton } from './ToggleOpenButton.component'
import { BlockEditor } from './BlockEditor.component'
import { BlockList } from './BlockList.component'
import { SelectBlock } from './SelectBlock.component'

export const ContentManager = () => {
  const {
    blocks: contentBlocks,
    addBlock,
    removeBlock
  } = useContentEditionContext()
  const [isOpen, toggleIsOpen] = useToggle(true) as [boolean, MouseEventHandler]
  const [selectedBlockId, setSelectedBlockId] = useState<string>()
  const selectedBlock = blocks.find(block => block.id === selectedBlockId)
  const [blockProps, setBlockProps] = useState(
    getInitialBlockProps(selectedBlock?.props)
  )

  const addNewBlock = () => {
    if (!selectedBlock) return
    const newBlock = {
      ...omit(selectedBlock, ['label']),
      id: genId(),
      props: blockProps
    }
    addBlock(newBlock)
  }

  const clearSelectedBlockId = () => setSelectedBlockId(undefined)

  useEffect(() => console.log({ contentBlocks }), [contentBlocks])
  useEffect(() => console.log({ blockProps }), [blockProps])

  return (
    <div
      className={`w-[${CONTENT_MANAGER_WIDTH}] flex flex-col h-screen right-[-${
        isOpen ? '0' : CONTENT_MANAGER_WIDTH
      }] fixed bg-gray-900 text-gray-100 p-3 transition-all`}
    >
      <ToggleOpenButton isOpen={isOpen} toggleIsOpen={toggleIsOpen} />
      <Header
        clearSelectedBlockId={clearSelectedBlockId}
        selectedBlock={selectedBlock}
        toggleIsOpen={toggleIsOpen}
      />
      {selectedBlock ? (
        <BlockEditor
          selectedBlock={selectedBlock}
          blockProps={blockProps}
          setBlockProps={setBlockProps}
        />
      ) : (
        <BlockList contentBlocks={contentBlocks} removeBlock={removeBlock} />
      )}
      <div className={`w-full mt-14`}>
        {selectedBlock ? (
          <></>
        ) : (
          // <button
          //   className="w-full h-fit p-2 rounded bg-gray-800 hover:bg-gray-700 active:bg-gray-800"
          //   onClick={addNewBlock}
          // >
          //   Add a block +
          // </button>
          <SelectBlock
            blocks={blocks}
            selectedBlockId={selectedBlockId}
            setSelectedBlockId={setSelectedBlockId}
            addNewBlock={addNewBlock}
          />
        )}
      </div>
    </div>
  )
}
