import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const LoginPage = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "/api/login",
        {
          ...inputValue,
        },
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="w-screen h-screen flex">
        <div className="m-auto p-9 shadow-2xl flex flex-col text-center rounded-2xl">
          <div className="mb-9 text-2xl font-bold">Login</div>
          <div className="flex flex-row-reverse ">
            <div className="m-5">
              <input
                className="bg-slate-100 shadow-inner rounded-xl px-3 w-52"
                type="text"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={handleOnChange}
              />
            </div>
            <div className="my-auto font-bold">Username:</div>
          </div>
          <div className="flex flex-row-reverse">
            <div className="m-5">
              <input
                className="bg-slate-100 shadow-inner rounded-xl px-3 w-52"
                type="password"
                name="password"
                value={password}
                placeholder="Enter your password"
                onChange={handleOnChange}
              />
            </div>
            <div className="my-auto font-bold">Password:</div>
          </div>
          <div className="flex flex-row-reverse mt-5">
            <button className=" bg-blue-500 mx-auto font-bold hover:shadow-xl shadow-blue-900 px-2  py-1 text-white rounded-2xl">
              Submit
            </button>
          </div>
          <span>
            Already have an account? <Link to={"/register"}>Signup</Link>
          </span>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
