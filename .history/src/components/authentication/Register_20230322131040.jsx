import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      username,
      email,
      password,
    };
    console.log(newUser);
    try {
      const res = await axios.post("http://localhost:3000/users", {
        ...newUser,
      });
      console.log(res);
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (err) {
      console.log(err);
    }

    console.log("Registered");
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
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
