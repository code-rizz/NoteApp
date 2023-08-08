import React, { useState } from 'react'
import Continer from '../Components/Continer'
import ListItem from '../Components/ListItem'
import Model from '../Components/Model'
import Notify from '../Components/Notify'
import { useNavigate } from 'react-router'

const HomePage = () => {
    const [openAddCategory, setOpenAddCategory] = useState(false);
    const [addCategory, setAddCategory] = useState('');
    const [notify, setNotify] = useState('');
    const [category, setCatagory] = useState([]);


    const goto = useNavigate();
  return (
    <div className='w-screen h-screen flex'>
        <Continer name="Note App" className="m-auto select-none" onAdd={()=>setOpenAddCategory(true)} >
            <>
            {
                category.map((c,n)=>(<ListItem value={c} key={n} onClick={()=>goto('/todolist/'+c)} />))
            }
            </>
        </Continer>  
        <Model open={openAddCategory}>
            <div>
                Enter the name of Category
            </div>
            <div>
                <input className='w-full border-b-2 focus:outline-none' type="text" value={addCategory} onChange={(e)=>setAddCategory(e.target.value)}/>
            </div>
            <div className='flex flex-row justify-around mt-3'>
                <button className=' text-green-500' onClick={()=>{
                    setCatagory([...category, addCategory]);
                    setOpenAddCategory(false);
                    setAddCategory('');
                }}>Add</button>
                <button className=' text-red-500' onClick={()=>{
                    setAddCategory('');
                    setOpenAddCategory(false);
                }}>Cancel</button>
            </div>
        </Model>
        <Notify value={notify} />  
    </div>
  )
}

export default HomePage