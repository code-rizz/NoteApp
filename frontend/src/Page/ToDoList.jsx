import React, { useEffect, useState } from "react";
import axios from "axios";
import Continer from "../Components/Continer";
import CheckList from "../Components/CheckList";
import { useParams } from "react-router";

function ToDoList() {
  const [toDoList, setToDoList] = useState([]);
  const { list } = useParams();

  useEffect(()=>{
    getTodos()
  },[])

  const getTodos = () => {
    axios.get(`/api/${list}/todos`).then((res)=>{
      console.log(res.data)
      setToDoList(res.data);
    })
  };

  const addTodo = (todo) => {
        axios.post(`/api/${list}/todos`, { todo:[""] }).then((res)=>{console.log(res.data);setToDoList(res.data);})
  };

  const deleteTodo = (id) => {
    return axios.delete(`/todos/${id}`);
  };

  const editTodo = (id, updatedTodo) => {
    return axios.patch(`/todos/${id}`, { todo: updatedTodo });
  };

  return (
    <div className="w-screen h-screen flex">
      <Continer
        name={list}
        className="m-auto select-none"
        onAdd={() => addTodo(" ")}
        onEdit={() => console.log("Added")}
        onDelete={() => console.log("Added")}
      >
        {toDoList.map((item, index) => (
          <CheckList
            onChecked={(c) => {
              let temp = [...toDoList];
              temp.pop(index);
              setToDoList(temp);
              console.log(index);
            }}
            key={index}
          />
        ))}
      </Continer>
    </div>
  );
}

export default ToDoList;
