import React from 'react'

function CheckList(props) {
  return (
    <div className='my-2 bg-white shadow-sm w-full py-2 rounded-lg px-4 flex flex-row'>
        <input type='checkbox' onClick={props.onChecked} checked={false}/>
        <input className=' ml-3 focus:outline-none w-full' type='text' value={props.value} onChange={props.onType} />
    </div>
  )
}

export default CheckList