import React from 'react'

function Model(props) {
  return (
    <>

    {props.open&&<div className='fixed z-50 backdrop-blur flex w-screen h-screen'>
        <div className='m-auto bg-white shadow-xl p-5 rounded-xl'>
            {props.children}
        </div>
    </div>}
    </>
  )
}

export default Model