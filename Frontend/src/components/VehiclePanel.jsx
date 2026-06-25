import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
       <h5
          className="absolute top-1 left-[45%] text-xl "
          onClick={() => {
            props.setVehiclePanel(false);
            props.setOpenPanel(true);
          }}
        >
          <i className="ri-arrow-down-wide-line"></i>
        </h5>
        <h3 className="text-2xl font-semibold mb-5 ">Choose a Vehicle</h3>
        <div className="flex w-full p-3 mb-2 items-center border-2 border-transparent active:border-black rounded-xl justify-between ">
          <img
            className="h-15 w-20 "
            src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
            alt=""
          />
          <div className=" w-1/2 ">
            <h4 className="font-medium text-base">
              UberGo{" "}
              <span>
                <i className="ri-user-fill"></i>
              </span>
              4
            </h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-medium text-xs text-gray-600">
              Affordable Compact Rides
            </p>
          </div>
          <div className="text-2xl font-semibold">₹193.20</div>
        </div>

        <div className="flex w-full p-3 mb-2 items-center border-2 border-transparent active:border-black rounded-xl justify-between ">
          <img
            className="h-15 w-20 "
            src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=552/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85NTM4NTEyZC1mZGUxLTRmNzMtYmQ1MS05Y2VmZjRlMjU0ZjEucG5n"
            alt=""
          />
          <div className=" w-1/2 ">
            <h4 className="font-medium text-base">
              UberGo{" "}
              <span>
                <i className="ri-user-fill"></i>
              </span>
              1
            </h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-medium text-xs text-gray-600">
              Affordable Motorcycle ride
            </p>
          </div>
          <div className="text-2xl font-semibold">₹85</div>
        </div>

        <div className="flex w-full p-3 mb-2 items-center border-2 border-transparent active:border-black rounded-xl justify-between ">
          <img
            className="h-15 w-20 "
            src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
            alt=""
          />
          <div className=" w-1/2 ">
            <h4 className="font-medium text-base">
              premier
              <span>
                <i className="ri-user-fill"></i>
              </span>
              4
            </h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-medium text-xs text-gray-600">
              Comfortable sedans , top-quality drivers
            </p>
          </div>
          <div className="text-2xl font-semibold ">₹193.20</div>
        </div>

        <div className="flex w-full p-3 mb-2 items-center border-2 border-transparent active:border-black rounded-xl justify-between ">
          <img
            className="h-15 w-20 "
            src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=0/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy80ZTcxOGQ1Yy1lNDMxLTU5YzUtYWNiNS1hYzQwYzI2YzI0ZGYud2VicA=="
            alt=""
          />
          <div className=" w-1/2 ">
            <h4 className="font-medium text-base">
              UberGo{" "}
              <span>
                <i className="ri-user-fill"></i>
              </span>
              1
            </h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-medium text-xs text-gray-600">
              Affordable Motorcycle ride
            </p>
          </div>
          <div className="text-2xl font-semibold">₹65</div>
        </div>
    </div>
  )
}

export default VehiclePanel
