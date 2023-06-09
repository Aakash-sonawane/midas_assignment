import React from 'react'

export default function InputBox({label,children,id,class1}) {
  return (
    <div className='inputBox'>
      
      <span className={class1} htmlFor={id}>{label}</span>
      {children}
      
    </div>
  )
}
