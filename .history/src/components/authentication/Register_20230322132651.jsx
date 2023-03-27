import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const validate = () => {
    let result = true;
    if (username === "" || username === null) {
      toast("Username is required");
      result = false;
    }
    if (email === "" || email === null) {
      toast("Email is required");
      result = false;
    }
    if (password === "" || password === null) {
      toast("Password is required");
      result = false;
    }
    return result;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      username,
      email,
      password,
    };
    if (validate()) {
      try {
        const res = await axios.post("http://localhost:3000/users", {
          ...newUser,
        });
        console.log(res);
        navigate("/login");
        toast("Register Successfull");
      } catch (err) {
        console.log(err);
        toast(`${err.message}`);
      }
    } else {
      toast("Invalid Register Details");
    }
  };

  return (
    <section className="w-full p-8">
      <div className="border mx-auto w-full md:w-[35rem] p-4 rounded-md ">
        <h1 className="text-center text-2xl font-bold mb-8 text-gray-700">
          Register Page
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <div className="text-base text-gray-600 capitalize mb-2">
              <label id="username">Username</label>
            </div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              htmlFor="username"
              placeholder="Enter your username"
              className="border border-gray-300 w-full rounded-md h-12 p-2 outline-none"
            />
          </div>
          <div className="mb-2">
            <div className="text-base text-gray-600 capitalize mb-2">
              <label id="email">Email</label>
            </div>
            <input
              type="text"
              htmlFor="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
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
              Register
            </button>
            <ToastContainer />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;