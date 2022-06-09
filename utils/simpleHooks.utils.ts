import { useState } from 'react'

export const useToggle = (init = false) => {
  const [state, setState] = useState(init)

  const toggle = value => {
    let v
    if (typeof value === 'boolean') v = value
    setState(prevState => (v ? v : !prevState))
  }

  return [state, toggle]
}
