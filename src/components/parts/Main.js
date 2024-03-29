import React from 'react'

export default function Main({children,imgsrc,load}) {
  return (
    <div className={`page-main-body`}>
          {!load && <div className='img_container'>
            <img src={imgsrc} alt='chart'></img>
          </div>}
          {children}
    </div>
  )
}
