export const copyArr = (arr: any[]) => [...arr]

export const arrayPush = <T = any>(arr: T[], elem: T): T[] => [...arr, elem]

export const arrayPushToStart = <T = any>(arr: T[], elem: T) => [elem, ...arr]

const createIterableFunction = arrayMethod => (iterable, callback) => {
  if (typeof iterable !== 'object') return

  if (Array.isArray(iterable))
    return iterable[arrayMethod]((elem, index) => callback(elem, index))
  else {
    const entries: any[] = Object.entries(iterable)
    return entries[arrayMethod](([key, value], index) =>
      callback(value, key, index)
    )
  }
}

export const map = createIterableFunction('map')
export const foreach = createIterableFunction('foreach')
export const find = createIterableFunction('find')
export const filter = createIterableFunction('filter')
export const reduce = createIterableFunction('reduce')
export const some = createIterableFunction('some')
export const every = createIterableFunction('every')

export const removeItemFromArray = <T = any>(arr: T[], index: number): T[] => {
  return [...arr.slice(0, index), ...arr.slice(index)]
}

export const updateItemInArray = <T = any>(
  arr: T[],
  index: number,
  updateValue: T
): T[] => {
  if (index < 0) return arr
  return [...arr.slice(0, index), updateValue, ...arr.slice(index)]
}

export const isEmpty = (arr: any[] | string) => !(arr.length > 0)
