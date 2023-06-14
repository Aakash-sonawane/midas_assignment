import React from 'react'

export default function Body({children,setShowPage}) {
  const handleShopage=(e)=>{
    setShowPage(e.target.id);
   }
  return (
    <div className='container load_page'>
      <div className='page'>
        <div className='page_header'>RC Frame</div>
        <div className='nav'>
          <div id='logitudanal' className='nav_el' onClick={handleShopage}>Longitudinal</div>
          <div id='transeverse' className='nav_el' onClick={handleShopage}>Transverse</div>
          <div id='load' className='nav_el' onClick={handleShopage}>Loads</div>
        </div>

        {children}

        </div>
      
    </div>
  )
}
