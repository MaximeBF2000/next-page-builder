import React, { useState } from 'react'

interface IText {
  as?: string
  children: any
  className?: string
  [key: string]: any
}

export const Text = ({
  as: Tag = 'p',
  children,
  className,
  ...props
}: IText) => {
  const [text, setText] = useState(children)

  const updateText = evt => setText(evt.target.firstChild?.textContent || '')

  return (
    <Tag
      contentEditable={true}
      suppressContentEditableWarning={true}
      onInput={updateText}
      className={className}
      {...props}
    >
      {children}
    </Tag>
  )
}
