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

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        goto("/login");
      }
      const { data } = await axios.post(
        "http://localhost:3001",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
      return status
        ? toast(`Hello ${user}`, {
            position: "top-right",
          })
        : (removeCookie("token"), goto("/login"));
    };
    verifyCookie();
  }, [cookies, goto, removeCookie]);
  const Logout = () => {
    removeCookie("token");
    goto("/login");
  };
  async function getCategory() {
    return await axios.get(`http://localhost:3001/krishna/category`);
  }

  async function addCategoryy(todo) {
    console.log(todo);
    return await axios.post("http://localhost:3001/krishna/category/add", {
      todo: todo,
    });
  }
  const deleteCategory = (id) => {
    return axios.delete(`/${username}/Category/${id}`);
  };

  const editCategory = (id, updatedTodo) => {
    return axios.patch(`/${username}/Category/${id}`, { todo: updatedTodo });
  };

  useEffect(() => {
    const categories = getCategory();
    categories.then((data) => {
      setCatagory(data.data);
    });
  }, [category]);

  return (
    <div className="w-screen h-screen flex">
      <h4>
        {" "}
        Welcome <span>{username}</span>
      </h4>
      <button onClick={Logout}>LOGOUT</button>
      <Continer
        name="Note App"
        className="m-auto select-none"
        onAdd={() => setOpenAddCategory(true)}
      >
        <>
          {category.map((cat) => (
            <ListItem
              value={cat.name}
              key={cat.name}
              onClick={() => goto("/todolist/" + cat.name)}
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
              addCategoryy(addCategory);
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
