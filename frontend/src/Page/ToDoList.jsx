import React, { useState } from 'react'
import Continer from '../Components/Continer'
import CheckList from '../Components/CheckList'
import { useParams } from 'react-router';

function ToDoList() {
    const [toDoList, setToDoList] = useState([]);
    const {list} = useParams();


  return (
    <div className='w-screen h-screen flex'>
    <Continer name={list} className="m-auto select-none" onAdd={()=>setToDoList([...toDoList, ''])} onEdit={()=>console.log("Added")} onDelete={()=>console.log("Added")}>
        {   
            toDoList.map((item, index)=>(<CheckList onChecked={(c)=>{let temp = [...toDoList];temp.pop(index);setToDoList(temp);console.log(index)}} key={index} />))
        }
    </Continer>    
</div>
  )
}

export default ToDoList