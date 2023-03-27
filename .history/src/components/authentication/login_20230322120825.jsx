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
            className="border border-black w-full rounded-md h-12"
          />
        </div>
        <div>
          <label id="password">Password</label>
          <input type="text" htmlFor="password" />
        </div>
      </div>
    </section>
  );
};

export default Login;
