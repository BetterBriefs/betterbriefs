import React from 'react'

export const TextInput = ({ label, type, id, name, value, onChange, errorMessage = '' }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      ></input>
      {errorMessage}
    </div>
  )
}
