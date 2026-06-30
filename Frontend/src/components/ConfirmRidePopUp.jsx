import React from "react";
import { Link } from "react-router-dom";

const ConfirmRidePopUp = (props) => {
  return (
    <div>
      <h5
        className="absolute top-1 left-[45%] text-xl "
        onClick={() => {
          props.setRidePopUpPanel(false);
        }}
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5 mt-2 ">
        Confirm this ride to start
      </h3>
      <div className="flex items-center justify-between mt-3 bg-yellow-400 rounded p-2">
        <div className="flex items-center gap-3 ">
          <img
            className="h-12 w-10 rounded-full object-cover"
            src="https://imgs.search.brave.com/lHnx2VxSsZ8OlYQn6nFV8ouHSypk2WH-zJXoXHHBMKg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8y/LzJlL0FCX2RlX3Zp/bGxpZXJzLmpwZw"
            alt=""
          />
          <h2 className="text-xl font-medium">Sanket Parihar</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2Km</h5>
      </div>
      <div className="flex gap-2 justify-between flex-col items-center mt-4">
        <div className="w-full">
          <div className="flex items-center gap-5 border-b-2 border-gray-200 mb-3">
            <i className="text-lg ri-map-pin-line"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab , Bhopal
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 border-b-2 border-gray-200 mb-3">
            <i className="ri-map-pin-user-line"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab , Bhopal
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 border-b-2 border-gray-200 mb-3">
            <i className="ri-wallet-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹193.80</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash</p>
            </div>
          </div>
        </div>
        <div className="">
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <input
              className="bg-[#a7a6a6]  px-5 py-2 text-base rounded-lg w-full mt-5"
              type="Number"
              placeholder="Enter OTP"
            />
            <br />
            <div className="flex gap-5 justify-center mt-5">
              <button
                onClick={() => {
                  props.setConfirmRidePopUpPanel(false);
                }}
                className="  bg-red-500 text-white font-semibold rounded  px-6 py-3"
              >
                Cancel
              </button>
              <Link
                to={"/captain-riding"}
                className=" bg-green-500 text-white font-semibold rounded px-6 py-3"
              >
                Confirm
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;
