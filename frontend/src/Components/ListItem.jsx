import React from 'react'

const ListItem = (props) => {
  return (
    <div className='my-2 bg-white shadow-sm w-full py-2 rounded-lg px-4 cursor-pointer select-none' onClick={props.onClick}>{props.value}</div>
  )
}

export default ListItem