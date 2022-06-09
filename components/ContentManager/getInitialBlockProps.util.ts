import { BLOCK_PROP_TYPES } from '@utils/block.utils'

const getInitialBlockProps = props => {
  const blockProps = {}

  props?.forEach(prop => {
    switch (prop?.type) {
      case BLOCK_PROP_TYPES.TEXT:
        blockProps[prop?.name] = ''
        break
      case BLOCK_PROP_TYPES.SELECT:
        blockProps[prop?.name] = prop?.defaultOption ?? prop?.options[0]
        break
      case BLOCK_PROP_TYPES.COLOR:
        blockProps[prop?.name] = '#000000'
        break
      default:
        break
    }
  })

  return blockProps
}

export default getInitialBlockProps
