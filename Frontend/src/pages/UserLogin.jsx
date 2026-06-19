import React from "react";

const UserLogin = () => {
  return (
    <div className="p-7 ">
      <img
        className="w-17 mb-7 mt-7 h-4"
        src="https://imgs.search.brave.com/UA9Fvo2eOU__nqbgQuTYdbHXkfCL_8sYgiS5bFOCY3A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L3ViZXItbG9nb3R5/cGUtcG5nLTEwLnBu/Zw"
        alt=""
      />
      <form action="">
        <h3 className="text-xl mb-2">What's Your Email?</h3>
        <input
          required
          type="email"
          placeholder="email@example.com"
          className="bg-[#eeeeee] mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base  "
        />
        <h3>Enter Password</h3>
        <input
          type="password"
          required
          placeholder="Enter Password"
          className="bg-[#eeeeee] mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base"
        />

        <button className="bg-[#111] text-[#fff] font-semibold mb-7 rounded px-4 py-2  w-full text-lg">
          Login
        </button>
      </form>
    </div>
  );
};

export default UserLogin;
