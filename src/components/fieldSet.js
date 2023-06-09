import React from 'react'

export default function FieldSet({legend,children}) {
  return (
    <>
    <fieldset className='transevers-field'>
        <legend>{legend}</legend>
        {children}
    </fieldset>
    </>
  )
}
