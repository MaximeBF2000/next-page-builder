import { isEmpty } from './array.utils'

export const genId = () =>
  parseFloat(Math.random().toString().slice(2)).toString(36)

export const capitalize = (str: string): string =>
  isEmpty(str) ? '' : str.at(0)?.toUpperCase() + str.slice(1)
