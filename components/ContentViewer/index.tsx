import React from 'react'
import { Block } from '@components/index'
import type { IBlock } from '@utils/index'
import { genId } from '@utils/index'
import { CONTENT_MANAGER_WIDTH } from '@styles/constants'

export const ContentViewer = ({ blocks }: { blocks: IBlock[] }) => {
  return (
    <div className="w-full" style={{ paddingRight: CONTENT_MANAGER_WIDTH }}>
      {blocks.map(block => {
        const BlockComponent = block.component

        return (
          <Block key={genId()} blockId={block?.id}>
            <BlockComponent {...block?.props} />
          </Block>
        )
      })}
    </div>
  )
}
