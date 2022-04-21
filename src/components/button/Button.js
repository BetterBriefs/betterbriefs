import React from 'react'

export const Button = ({ onClick, children, type = 'submit' }) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  )
}
