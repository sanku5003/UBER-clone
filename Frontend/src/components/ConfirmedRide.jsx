import React from "react";

const ConfirmedRide = (props) => {
  return (
    <div>
      <h5
        className="absolute top-1 left-[45%] text-xl "
        onClick={() => {
          props.setConfirmedRidePanel(false);
          props.setVehiclePanel(true);
        }}
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5 ">Confirm your Ride</h3>
      <div className="flex gap-2 justify-between flex-col items-center">
        {" "}
        <img
          className="h-30"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt=""
        />
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
              <p className="text-sm -mt-1 text-gray-600">
                Cash
              </p>
            </div>
          </div>
        </div>
        <button className="w-full bg-green-500 text-white font-semibold p-2 rounded-xl ">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmedRide;
