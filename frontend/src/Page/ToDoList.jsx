import React, { useState } from "react";
import Continer from "../Components/Continer";
import CheckList from "../Components/CheckList";
import { useParams } from "react-router";
import Model from "../Components/Model";

function ToDoList() {
  const [toDoList, setToDoList] = useState([]);
  const { list } = useParams();
  const [openEditCategory, setOpenEditCategory] = useState(false);
  const [openDeleteCategory, setOpenDeleteCategory] = useState(false);
  const [addCategory, setAddCategory] = useState(list);

  return (
    <div className="w-screen h-screen flex">
      <Continer
        name={addCategory}
        className="m-auto select-none"
        onAdd={() => setToDoList([...toDoList, ""])}
        onEdit={() => setOpenEditCategory(true)}
        onDelete={() => setOpenDeleteCategory(true)}
      >
        {toDoList.map((item, index) => (
          <CheckList
            value={item}
            onType={(e) => {
              setToDoList([
                ...toDoList.slice(0, index),
                e.target.value,
                ...toDoList.slice(index + 1),
              ]);
            }}
            onChecked={(c) => {
              let temp = [...toDoList];
              temp.splice(index, 1);
              setToDoList(temp);
              console.log(c.target.value);
            }}
            key={index}
          />
        ))}
      </Continer>
      <Model open={openEditCategory}>
            <div>
                Enter the name of Category
            </div>
            <div>
                <input className='w-full border-b-2 focus:outline-none' type="text" value={addCategory} onChange={(e)=>setAddCategory(e.target.value)}/>
            </div>
            <div className='flex flex-row justify-around mt-3'>
                <button className=' text-green-500' onClick={()=>{
                    setOpenEditCategory(false);
                }}>Add</button>
                <button className=' text-red-500' onClick={()=>{
                    setOpenEditCategory(false);
                }}>Cancel</button>
            </div>
        </Model>
        <Model open={openDeleteCategory}>
            <div>
                do you want to delete this Category?
            </div>
            <div className='flex flex-row justify-around mt-3'>
                <button className=' text-green-500' onClick={()=>{
                    setOpenDeleteCategory(false);
                }}>Yes</button>
                <button className=' text-red-500' onClick={()=>{
                    setOpenDeleteCategory(false);
                }}>NO</button>
            </div>
        </Model>
    </div>
  );
}

export default ToDoList;
