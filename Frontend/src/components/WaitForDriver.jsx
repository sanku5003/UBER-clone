import React from "react";

const WaitForDriver = (props) => {
  return (
    <div>
      <h5
        className="absolute top-1 left-[45%] text-xl "
        onClick={() => {
          props.waitingForDriver(false);
        }}
      >
        {" "}
        <i className="ri-arrow-down-wide-line"></i>
      </h5>
      <div>
        <div className="flex items-center justify-between">
          <img
            className="h-10"
            src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
            alt=""
          />
          <div className="text-right">
            <h2 className="text-lg font-medium">Sanket Parihar</h2>
            <h4 className="text-xl font-semibold -mt-1 -mb-1">MP04 AB 1234</h4>
            <p className="text-sm text-gray-600">Maruti Suzuki Alto</p>
          </div>
        </div>
        <div className="flex gap-2 justify-between flex-col items-center">
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
        </div>
      </div>
    </div>
  );
};

export default WaitForDriver;
