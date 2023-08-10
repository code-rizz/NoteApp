import React from 'react'

function Button(props) {
  return (
    <>
    {props.onClick&&<div className={' cursor-pointer z-10 absolute rounded-full w-10 h-10 flex ' + props.className } onClick={props.onClick}>
            <div className='m-auto '>
                {props.children}
            </div>
    </div>}
    </>
  )
}

export default Button