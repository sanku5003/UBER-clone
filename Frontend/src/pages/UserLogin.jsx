import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from 'axios';
const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const [user , setUser] = React.useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = {
      email : email,
      password : password
    }
    console.log(userData);
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/login` , userData);
    if(response.status === 200){
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token' , data.token);
      navigate('/home');
    }

    setEmail("");
    setPassword("");

  
  };

  return (
    <div className="p-7 flex flex-col justify-between h-screen ">
      <div>
        <img
          className="w-17 mb-7 mt-7 h-4"
          src="https://imgs.search.brave.com/UA9Fvo2eOU__nqbgQuTYdbHXkfCL_8sYgiS5bFOCY3A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L3ViZXItbG9nb3R5/cGUtcG5nLTEwLnBu/Zw"
          alt=""
        />
        <form
          action=""
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">What's Your Email?</h3>
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="email@example.com"
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base  "
          />
          <h3>Enter Password</h3>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            required
            placeholder="Enter Password"
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base"
          />

          <button
            type="submit"
            className="bg-[#111] text-[#ffffff] font-semibold mb-2 rounded px-4 py-2  w-full text-lg"
          >
            Login
          </button>
          <p className="text-center">
            New Here?{" "}
            <Link to={"/signup"} className="text-blue-600">
              Create New Account
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          to={"/captain-login"}
          className="block bg-[#10b461] text-[#ffffff] font-semibold mb-7 rounded px-4 py-2  w-full text-lg text-center"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
