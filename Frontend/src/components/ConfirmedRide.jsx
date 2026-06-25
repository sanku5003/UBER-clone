import React from 'react'

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
      <h3 className="text-2xl font-semibold mb-5 ">Choose a Vehicle</h3>
    </div>
  )
}

export default ConfirmedRide
