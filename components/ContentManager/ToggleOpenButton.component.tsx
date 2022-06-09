import { SwitchHorizontalIcon } from '@heroicons/react/solid'
import React from 'react'

export const ToggleOpenButton = ({ isOpen, toggleIsOpen }) => {
  if (isOpen) return null

  return (
    <div
      className="flex justify-center items-center cursor-pointer w-14 h-14 rounded-bl absolute top-0 right-full bg-gray-900 text-gray-100"
      onClick={toggleIsOpen}
    >
      <SwitchHorizontalIcon className="w-5 h-5 cursor-pointer" />
    </div>
  )
}
