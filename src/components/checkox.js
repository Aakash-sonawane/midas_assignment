import React from 'react'

import '../App.css'
export default function CheckBox({label,children}) {
  return (
    <>
      <span className='label'>{label}</span>
      {children}
    </>
  )
}
