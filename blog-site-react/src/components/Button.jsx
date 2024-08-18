import React from 'react'

function Button({
    children,
    type= 'button',
    bgColour ='bg-blue-600',
    textcolour = 'text-white',
    classname ='',
    ...props
}) {
  return (
    <button className={`px-4 py-2 rounded-lg ${classname} ${bgColour} ${textcolour}`}{...props}>
        {children}
    </button>
  )
}

export default Button
