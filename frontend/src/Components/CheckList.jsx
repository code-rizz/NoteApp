import React from 'react'

function CheckList() {
  return (
    <div className='my-2 bg-white shadow-sm w-full py-2 rounded-lg px-4 cursor-pointer flex flex-row'>
        <input type='checkbox' />
        <input className=' ml-3 focus:outline-none w-full' type='text' />
    </div>
  )
}

export default CheckList