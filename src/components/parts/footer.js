import React from 'react'
import handleFileChange from '../../utils/handleFileChange'
import handleSubmit from '../../utils/handleSubmit'

export default function Footer({formData,setFormData}) {
  return (
    <div className='footer-container'>
          <input type="file" accept=".json"  onChange={(e)=>{handleFileChange(e,setFormData)}}/>
          <button onClick={(e)=>{
            e.preventDefault()
            handleSubmit(formData)
            setFormData(formData)
          }}>Save</button>
        </div>
  )
}
