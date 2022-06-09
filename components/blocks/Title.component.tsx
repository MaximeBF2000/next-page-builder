import React from 'react'
import { Text } from '..'

const PLACEMENT_PROPS_BY_OPTIONS = {
  left: 'start',
  center: 'center',
  right: 'end'
}

export const Title = ({ text, placement = 'center', color }) => {
  return (
    <div
      className={`w-full flex justify-${PLACEMENT_PROPS_BY_OPTIONS[placement]}`}
    >
      <Text
        className="w-fit py-1 px-2 outline-none"
        style={{ color: color ?? '#000' }}
      >
        {text ?? 'Your beautiful title'}
      </Text>
    </div>
  )
}
