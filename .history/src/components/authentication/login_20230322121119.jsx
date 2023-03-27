import React from "react";

const Login = () => {
  return (
    <section className="w-full p-8">
      <div className="border mx-auto w-full md:w-[35rem] p-4">
        <div>
          <div className="text-base text-gray-600 capitalize mb-2">
            <label id="username">Username</label>
          </div>
          <input
            type="text"
            htmlFor="username"
            placeholder="Enter your username"
            className="border border-gray-300 w-full rounded-md h-12 p-2"
          />
        </div>
        <div>
          <div className="text-base text-gray-600 capitalize mb-2">
            <label id="passowrd">Passowrd</label>
          </div>
          <input
            type="text"
            htmlFor="password"
            placeholder="Enter your passowrd"
            className="border border-gray-300 w-full rounded-md h-12 p-2"
          />
        </div>
      </div>
    </section>
  );
};

export default Login;
