import React, { useState } from 'react'

function RegisterPage() {
    const [password, setPassword] = useState('');
    const [isConfirm, setisConfirm] = useState(false);
  return (
    <div className='w-screen h-screen flex' >
        <div className='m-auto p-9 shadow-2xl flex flex-col text-center rounded-2xl'>
            <div className='mb-9 text-2xl font-bold'>Register</div>
            <div className='flex flex-row-reverse '>
                
                <div className='m-5'>
                    <input className='bg-slate-100 shadow-inner rounded-xl px-3 w-52'  type="text" />
                </div>
                <div className='my-auto font-bold'>
                Username:
                </div>
            </div>
            <div className='flex flex-row-reverse'>
                <div className='m-5'>
                    <input className='bg-slate-100 shadow-inner rounded-xl px-3 w-52' type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                <div className='my-auto font-bold'>
                Password:
                </div>
            </div>
            <div className='flex flex-row-reverse'>
                <div className='m-5'>
                    <input className={`bg-slate-100 shadow-inner rounded-xl px-3 w-52 ${!isConfirm&&" border-2 border-red-500 active:border-2 active:border-red-500"}`} type="password" onChange={(e)=>setisConfirm(password===e.target.value)} />
                </div>
                <div className='my-auto  font-bold'>
                Confirm :
                </div>
            </div>  
            <div className='flex flex-row-reverse mt-5'>
                <button className=' bg-blue-500 mx-auto font-bold hover:shadow-xl shadow-blue-900 px-2  py-1 text-white rounded-2xl'>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default RegisterPage