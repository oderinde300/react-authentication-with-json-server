import React from "react";

const Login = () => {
  return (
    <section className="w-full p-8">
      <div className="border mx-auto w-full md:w-[35rem]">
        <div>
          <label id="username">Username</label>
          <input
            type="text"
            htmlFor="username"
            className="border border-black"
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
