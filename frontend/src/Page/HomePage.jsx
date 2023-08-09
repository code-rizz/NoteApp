import React, { useState, useEffect } from "react";
import Continer from "../Components/Continer";
import ListItem from "../Components/ListItem";
import Model from "../Components/Model";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const HomePage = () => {
  const [openAddCategory, setOpenAddCategory] = useState(false);
  const [addCategory, setAddCategory] = useState("");
  const goto = useNavigate();
  const [category, setCatagory] = useState([]);
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");

 useEffect(()=>{
  axios.get(`/api/category`).then(res=>{
    if(res.data.status === false)
      goto('/login')
      else
      setCatagory(res.data)
  })
 },[])

  const Logout = () => {
    removeCookie("token");
    goto("/login");
  };


  async function addCategoryy(todo) {
    console.log(todo);
    axios.post("/api/category/add", {
      todo: todo,
    }).then(res=>{
      setCatagory(res.data)

    })
  }
  const deleteCategory = (id) => {
    return axios.delete(`/${username}/Category/${id}`);
  };

  const editCategory = (id, updatedTodo) => {
    return axios.patch(`/${username}/Category/${id}`, { todo: updatedTodo });
  };

  

  return (
    <div className="w-screen h-screen flex">
      <Continer
        name="Note App"
        className="m-auto select-none"
        onAdd={() => setOpenAddCategory(true)}
        onLogout={Logout}
      >
        <>
        {console.log(category)}
          {category.map((cat) => (
            <ListItem
              value={cat.name}
              key={cat._id}
              onClick={() => goto("/todolist/" + cat.name+'/'+cat._id)}
            />
          ))}
        </>
      </Continer>
      <Model open={openAddCategory}>
        <div>Enter the name of Category</div>
        <div>
          <input
            className="w-full border-b-2 focus:outline-none"
            type="text"
            value={addCategory}
            onChange={(e) => setAddCategory(e.target.value)}
          />
        </div>
        <div className="flex flex-row justify-around mt-3">
          <button
            className=" text-green-500"
            onClick={() => {
              addCategoryy(addCategory);
              setOpenAddCategory(false);
              setAddCategory("");
            }}
          >
            Add
          </button>
          <button
            className=" text-red-500"
            onClick={() => {
              setAddCategory("");
              setOpenAddCategory(false);
            }}
          >
            Cancel
          </button>
        </div>
      </Model>
      <ToastContainer />
    </div>
  );
};

export default HomePage;
