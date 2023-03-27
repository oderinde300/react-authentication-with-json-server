import React, { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //   const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get("http://localhost:3000/user/" + username);
      console.log(res);
    } catch (err) {
      console.log(err);
      toast(`${err.message}`);
    }
    console.log("loggedIn");
  };

  return (
    <section className="w-full p-8">
      <div className="border mx-auto w-full md:w-[35rem] p-4 rounded-md ">
        <h1 className="text-center text-2xl font-bold mb-8 text-gray-700">
          Login Page
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <div className="text-base text-gray-600 capitalize mb-2">
              <label id="username">Username</label>
            </div>
            <input
              type="text"
              htmlFor="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border border-gray-300 w-full rounded-md h-12 p-2 outline-none"
            />
          </div>
          <div className="mb-2">
            <div className="text-base text-gray-600 capitalize mb-2">
              <label id="passowrd">Passowrd</label>
            </div>
            <input
              type="text"
              htmlFor="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your passowrd"
              className="border border-gray-300 w-full rounded-md h-12 p-2 outline-none"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between md:w-[12rem] mt-8">
            <button className=" px-4 py-2 rounded-md bg-blue-500 text-white font-bold hover:shadow-md mb-4">
              Login
            </button>
            <ToastContainer />

            {/* <button
              className=" px-4 py-2 rounded-md bg-blue-500 text-white font-bold hover:shadow-md mb-4"
              onClick={navigate("/register")}
            >
              Register
            </button> */}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
