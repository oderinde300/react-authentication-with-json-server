import React from "react";

const Login = () => {
  return (
    <div className="border mx-auto my-8 w-full md:w-96">
      <div>
        <label id="username">Username</label>
        <input type="text" htmlFor="username" className="border border-black" />
      </div>
      <div>
        <label id="password">Password</label>
        <input type="text" htmlFor="password" />
      </div>
    </div>
  );
};

export default Login;
