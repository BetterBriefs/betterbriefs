import React from 'react'
import './Button.css';

export const Button = ({ onClick, children, type = 'submit', usage = 'primary' }) => {
  return (
      <button className={usage + ' button'} type={type} onClick={onClick}>
        {children}
      </button>
    ) 
}
