import React from 'react'

export default function InputBox({label,children}) {
  return (
    <div className='inputBox'>
      <label htmlFor={id}>{label}</label>
      {children}
    </div>
  )
}
