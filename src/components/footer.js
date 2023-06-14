import React from 'react'

export default function Footer({handleFileChange,formData,setFormData,handleSubmit}) {
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
