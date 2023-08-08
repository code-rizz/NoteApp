import React, { useState } from "react";
import Continer from "../Components/Continer";
import CheckList from "../Components/CheckList";
import { useParams } from "react-router";

function ToDoList() {
  const [toDoList, setToDoList] = useState([]);
  const { list } = useParams();

  return (
    <div className="w-screen h-screen flex">
      <Continer
        name={list}
        className="m-auto select-none"
        onAdd={() => setToDoList([...toDoList, ""])}
        onEdit={() => console.log("Added")}
        onDelete={() => console.log("Added")}
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
    </div>
  );
}

export default ToDoList;
