import React from 'react'
import InputBox from './inputBox'

export default function DiamentionInput({label,measure,disable,val,onChange}) {
  return (
    <InputBox label={label} class1={'label width'}>
       {disable ? <><input type='text' disabled className='width2 mr2 inp' value={val}/> <span>{measure}</span></>:
     <><input name={label} type='text' className='width2 mr2 inp' value={val} onChange={onChange}/>
      <span>{measure}</span></>}
    </InputBox>
    
  )
}
