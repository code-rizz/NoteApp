import React, { useEffect, useState } from "react";
import axios from "axios";
import Continer from "../Components/Continer";
import CheckList from "../Components/CheckList";
import { useNavigate, useParams } from "react-router";
import Model from "../Components/Model";

function ToDoList() {
  const [toDoList, setToDoList] = useState([]);
  const { list,id } = useParams();
  const [addCategory, setAddCategory] = useState(list);
  const [openEditCategory, setOpenEditCategory] = useState(false);
  const [openDeleteCategory, setOpenDeleteCategory] = useState(false);
  const goto = useNavigate();

  useEffect(()=>{
    getTodos()
  },[])



  const getTodos = () => {
    axios.get(`/api/${list}/todos`).then((res)=>{
      // console.log(res.data)
      if(res.data.status === false)
        goto('/')
      setToDoList(res.data);
    })
  };

  const addTodo = (todo) => {
        axios.post(`/api/${list}/todos`, { todo:[""] }).then((res)=>{console.log(res.data);setToDoList(res.data);})
  };

  const deleteTodo = (id) => {
    return axios.delete(`/api/${list}/todos/${id}`).then(res=>{setToDoList(res.data);});
  };

  const editTodo = () => {
    return axios.patch(`/api/${list}/todos/`, { todo: toDoList }).then();
  };

  return (
    <div className="w-screen h-screen flex">
      <Continer
        name={list}
        className="m-auto select-none"
        onAdd={() => addTodo(" ")}
        onEdit={() => setOpenEditCategory(true)}
        onDelete={() => setOpenDeleteCategory(true)}
        onBack={() => goto('/')}
      >
        {toDoList.map((item, index) => (
          <CheckList
          value={item.name}
          key={item._id}
          onType={(e) => {
            setToDoList([
              ...toDoList.slice(0, index),
              {name:e.target.value, _id:item._id},
              ...toDoList.slice(index + 1),
            ]);
            editTodo();
          }}
          onChecked={(c) => {
            // let temp = [...toDoList];
            // temp.splice(index, 1);
            // setToDoList(temp);
            // console.log(c.target.value);
            deleteTodo(item._id);
          }}
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
                    axios.patch(`/api/category/${id}`,{todo:addCategory}).then(()=>{goto(`/todolist/${addCategory}/${id}`);})
                    setOpenEditCategory(false);
                }}>Change</button>
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
                    axios.delete(`/api/category/${id}`).then(()=>{goto('/');})
                    
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
