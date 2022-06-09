type objectAny = { [key: string]: any }

export const copyObject = <T = objectAny>(obj: T): T => ({ ...obj })

const omitOneKey = (obj: objectAny, omitedKey: string): objectAny => {
  const { [omitedKey]: toOmit, ...filteredObject } = obj
  return filteredObject
}

export const omit = (obj: objectAny, omitedKeys: string[]): objectAny =>
  omitedKeys.reduce(
    (newObject, omitedKey) => omitOneKey(newObject, omitedKey),
    copyObject(obj)
  )
