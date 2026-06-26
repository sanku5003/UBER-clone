import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
      <Link to={'/home'} className="fixed  h-10 w-10 right-2 top-2 bg-white flex items-center justify-center rounded-full">
        <i className="text-xl font-bold ri-home-2-fill"></i>
      </Link>
      <div className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>

      <div className="h-1/3 p-5 flex flex-col ">
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between ">
            <img
              className="h-10"
              src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
              alt=""
            />
            <div className="text-right">
              <h2 className="text-lg font-medium">Sanket Parihar</h2>
              <h4 className="text-xl font-semibold -mt-1 -mb-1">
                MP04 AB 1234
              </h4>
              <p className="text-sm text-gray-600">Maruti Suzuki Alto</p>
            </div>
          </div>
          <div className="flex gap-2 justify-between flex-col items-center ">
            <div className="w-full">
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
          </div>
        </div>
        <div className="w-full mt-5">
          <button className="w-full bg-green-500 text-white font-semibold p-2 rounded-xl   ">
            Make a Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Riding;
