import React from 'react'

function Button(props) {
  return (
    <>
    {props.onClick&&<div className={' cursor-pointer shadow-2xl z-10 absolute bottom-5 rounded-full w-10 h-10 flex ' + props.className } onClick={props.onClick}>
            <div className='m-auto '>
                {props.children}
            </div>
    </div>}
    </>
  )
}

export default Button