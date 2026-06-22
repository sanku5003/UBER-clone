import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <div className="bg-cover bg-bottom bg-[url('https://images.unsplash.com/photo-1624724126923-e2c021df1311?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] pt-8 h-screen w-full flex justify-between flex-col">
        <img
          className="w-17 ml-4 h-5"
          src="https://imgs.search.brave.com/UA9Fvo2eOU__nqbgQuTYdbHXkfCL_8sYgiS5bFOCY3A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L3ViZXItbG9nb3R5/cGUtcG5nLTEwLnBu/Zw"
          alt=""
        />
        <div className="bg-white py-4 px-4 pb-7">
          <h2 className="text-2xl font-bold">Get Started With Uber</h2>
          <Link
            to={"/login"}
            className="block w-full bg-black text-white py-3 rounded mt-5 text-center"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
