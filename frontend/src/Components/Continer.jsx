import React from 'react'
import Button from './Button'

const Continer = (props) => {
  return (
    <div className={props.className+' w-full h-full sm:h-5/6 sm:w-1/2 rounded-xl min-h-fit min-w-fit shadow-2xl flex-row relative '}>
        <div className='h-1/6 m-3  flex'>
            <div className='m-auto font-extrabold font-["Poppins"] text-3xl'>{props.name}</div>
        </div>
        <div className=' bg-slate-50 m-3 shadow-inner rounded-xl p-2 h-4/6 overflow-y-auto'>
            {props.children}
        </div>
        <Button onClick={props.onAdd} className=" right-8 bg-green-500">
        <svg className='w-5 h-5' viewBox="0 0 512 512"><path d="M417.4,224H288V94.6c0-16.9-14.3-30.6-32-30.6c-17.7,0-32,13.7-32,30.6V224H94.6C77.7,224,64,238.3,64,256  c0,17.7,13.7,32,30.6,32H224v129.4c0,16.9,14.3,30.6,32,30.6c17.7,0,32-13.7,32-30.6V288h129.4c16.9,0,30.6-14.3,30.6-32  C448,238.3,434.3,224,417.4,224z"/></svg>
        </Button>
        <Button onClick={props.onEdit} className=" right-20 bg-blue-500">
        <svg className='w-5 h-5' viewBox="0 0 24 24" ><path d="m18.988 2.012 3 3L19.701 7.3l-3-3zM8 16h3l7.287-7.287-3-3L8 13z"/><path d="M19 19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .896-2 2v14c0 1.104.897 2 2 2h14a2 2 0 0 0 2-2v-8.668l-2 2V19z"/></svg>
        </Button>
        <Button onClick={props.onDelete} className=" right-32 bg-red-500">
        <svg className='w-5 h-5' enable-background="new 0 0 32 32" viewBox="0 0 32 32" ><path d="M6,12v15c0,1.654,1.346,3,3,3h14c1.654,0,3-1.346,3-3V12H6z M12,25c0,0.552-0.448,1-1,1s-1-0.448-1-1v-9  c0-0.552,0.448-1,1-1s1,0.448,1,1V25z M17,25c0,0.552-0.448,1-1,1s-1-0.448-1-1v-9c0-0.552,0.448-1,1-1s1,0.448,1,1V25z M22,25  c0,0.552-0.448,1-1,1s-1-0.448-1-1v-9c0-0.552,0.448-1,1-1s1,0.448,1,1V25z" id="XMLID_237_"/><path d="M27,6h-6V5c0-1.654-1.346-3-3-3h-4c-1.654,0-3,1.346-3,3v1H5C3.897,6,3,6.897,3,8v1c0,0.552,0.448,1,1,1h24  c0.552,0,1-0.448,1-1V8C29,6.897,28.103,6,27,6z M13,5c0-0.551,0.449-1,1-1h4c0.551,0,1,0.449,1,1v1h-6V5z" id="XMLID_243_"/></svg>
        </Button>
        </div>
  )
}

export default Continer