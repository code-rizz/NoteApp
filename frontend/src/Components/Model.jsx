import React from 'react'
import { motion } from 'framer-motion'

function Model(props) {
  return (
    <>

    {props.open&&<div className='fixed z-50 backdrop-blur flex w-screen h-screen'>
        <motion.div initial={{scale:0}} animate={{scale:1}} className='m-auto bg-white shadow-xl p-5 rounded-xl'>
            {props.children}
        </motion.div>
    </div>}
    </>
  )
}

export default Model