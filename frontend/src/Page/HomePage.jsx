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

  const getCategory = () => {
    console.log("here");
    return axios.get(`/${username}/Category`);
  };

  const addCategory = (todo) => {
    return axios.post(`/${username}/Category/add`, { todo });
  };

  const deleteCategory = (id) => {
    return axios.delete(`/${username}/Category/${id}`);
  };

  const editCategory = (id, updatedTodo) => {
    return axios.patch(`/${username}/Category/${id}`, { todo: updatedTodo });
  };

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
          {category.map((c, n) => (
            <ListItem
              value={c}
              key={n}
              onClick={() => goto("/todolist/" + c)}
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
              setCatagory([...category, addCategory]);
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
