import { Title } from '@components/blocks'

export const BLOCK_PROP_TYPES = {
  TEXT: 'text',
  LONG_TEXT: 'longText',
  SELECT: 'select',
  COLOR: 'color'
}
type ValuesOf<T> = T[keyof T]

export const BLOCK_COMPONENTS = {
  title: Title
}

export interface IBlockManager {
  id: string
  name: string
  label?: string
  component: any
  props?: IBlockManagerProps[]
}

export interface IBlock {
  id: string
  name: string
  type: ValuesOf<keyof typeof BLOCK_PROP_TYPES>
  component: any
  props?: any[]
}

interface IBlockManagerProps {
  name: string
  title: string
  type: ValuesOf<keyof typeof BLOCK_PROP_TYPES>
  label?: string
  defaultText?: string
  options?: string[]
  defaultOption?: string
}
