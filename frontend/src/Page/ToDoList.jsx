import React, { useState } from 'react'
import Continer from '../Components/Continer'
import CheckList from '../Components/CheckList'

function ToDoList() {
    const [toDoList, setToDoList] = useState([]);
  return (
    <div className='w-screen h-screen flex'>
    <Continer name="ToDoList" className="m-auto select-none" onAdd={()=>setToDoList([...toDoList, ''])} onEdit={()=>console.log("Added")} onDelete={()=>console.log("Added")}>
        {
            toDoList.map((item, index)=>(<CheckList value={item} key={index} />))
        }
    </Continer>    
</div>
  )
}

export default ToDoList