import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";
const CaptainSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");

  const { captain, setCaptain } = React.useContext(CaptainDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const captainData = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      vehicle: {
        vehicleType: vehicleType,
        plate: vehiclePlate,
        color: vehicleColor,
        capacity: vehicleCapacity,
      },
      password: password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captain/register`,
      captainData,
    );

    if (response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }

    setEmail("");
    setFirstname("");
    setLastname("");
    setPassword("");
    setVehicleType("");
    setVehiclePlate("");
    setVehicleColor("");
    setVehicleCapacity("");
  };
  return (
    <div>
      <div className="p-7 flex flex-col justify-between h-screen">
        <div>
          <img
            className="w-17 mb-7 mt-2 h-4"
            src="https://imgs.search.brave.com/UA9Fvo2eOU__nqbgQuTYdbHXkfCL_8sYgiS5bFOCY3A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L3ViZXItbG9nb3R5/cGUtcG5nLTEwLnBu/Zw"
            alt=""
          />
          <form
            action=""
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <h3 className="text-base font-medium mb-2">What's Your Name :</h3>
            <div className="flex gap-4 mb-5">
              <input
                value={firstname}
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
                required
                type="text"
                placeholder="First Name"
                className="bg-[#eeeeee]  w-1/2 rounded px-4 py-2 text-base placeholder:text-sm"
              />
              <input
                value={lastname}
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
                required
                type="text"
                placeholder="Last Name"
                className="bg-[#eeeeee] rounded w-1/2 px-4 py-2 text-base placeholder:text-sm"
              />
            </div>
            <h3 className="text-base font-medium mb-2">What's Your Email?</h3>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
              type="email"
              placeholder="email@example.com"
              className="bg-[#eeeeee] mb-5 rounded px-4 py-2  w-full text-base placeholder:text-sm  "
            />
            <h3 className="text-base font-medium mb-2">Enter Password</h3>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              required
              placeholder="Enter Password"
              className="bg-[#eeeeee] mb-5 rounded px-4 py-2  w-full text-base placeholder:text-sm"
            />

            <h3 className="text-base font-medium mb-2">Vehicle Type</h3>
            <select
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value);
              }}
              required
              className="bg-[#eeeeee] mb-5 rounded px-4 py-2  w-full text-base"
            >
              <option value="">Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="motorcycle">Motorcycle</option>
            </select>

            <h3 className="text-base font-medium mb-2">Vehicle Plate</h3>
            <input
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value);
              }}
              required
              type="text"
              placeholder="Vehicle Plate"
              className="bg-[#eeeeee] mb-5 rounded px-4 py-2  w-full text-base placeholder:text-sm"
            />

            <h3 className="text-base font-medium mb-2">Vehicle Color</h3>
            <input
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value);
              }}
              required
              type="text"
              placeholder="Vehicle Color"
              className="bg-[#eeeeee] mb-5 rounded px-4 py-2  w-full text-base placeholder:text-sm"
            />

            <h3 className="text-base font-medium mb-2">Vehicle Capacity</h3>
            <input
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value);
              }}
              required
              type="number"
              placeholder="Vehicle Capacity"
              className="bg-[#eeeeee] mb-5 rounded px-4 py-2  w-full text-base placeholder:text-sm"
            />

            <button
              type="submit"
              className="bg-[#111] text-[#ffffff] font-semibold mb-2 rounded px-4 py-2  w-full text-lg"
            >
              Create Captain Account
            </button>
            <p className="text-center">
              Already have an Account?{" "}
              <Link to={"/captain-login"} className="text-blue-600">
                Login Here.
              </Link>
            </p>
          </form>
        </div>
        <div className="mt-4">
          <p className="text-[10px] leading-tight">
            By proceeding , you consent to get calls, Whatsapp or SMS messages,
            including by automated means, from Uber and its affiliates to the
            number provided.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaptainSignUp;
