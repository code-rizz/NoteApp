import React from 'react'

function Notify(props) {
  return (
    <div className=' absolute right-0 top-4 py-2 px-5 rounded-l-3xl shadow-2xl shadow-green-900' >{props.value}</div>
  )
}

export default Notify