import React, { useEffect, useRef, useState } from 'react'
import { motion, stagger } from 'framer-motion'
function CheckList(props) {
  const [isChecked, setIsChecked] = useState(false);
  const ref = useRef()
  useEffect(()=>{
    setIsChecked(ref.current?.checked);
  })
  console.log('rean')
  return (
    <motion.div layout initial={{scale:0}} animate={{scale:1}} exit={{scale:0}} className='my-2 bg-white shadow-sm w-full py-2 rounded-lg px-4 flex flex-row'>
        <input ref={ref} type='checkbox' onClick={props.onChecked} />
        <input className={(isChecked?" line-through":"")+' ml-3  focus:outline-none w-full'} type='text' value={props.value} onChange={props.onType} />
    </motion.div>
  )
}

export default CheckList