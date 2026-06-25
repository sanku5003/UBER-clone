import React from "react";
import "remixicon/fonts/remixicon.css";
const LocationSearchPanel = (props) => {
  const locations = [
    "993 , Near Khatu Shyam Mandir , Anjani Mata Mohalla , Chirgaon",
    "994 , Near Khatu Shyam Mandir , Anjani Mata Mohalla , Chirgaon",
    "995 , Near Khatu Shyam Mandir , Anjani Mata Mohalla , Chirgaon",
    "996 , Near Khatu Shyam Mandir , Anjani Mata Mohalla , Chirgaon",
  ];

  return (
    <div>
      {locations.map(function (elem, idx) {
        return (
          <div
            onClick={() => {
              props.setVehiclePanel(true);
              props.setPanelOpen(false)
            }}
            key={idx}
            className="flex gap-4 border-2  p-3 rounded-xl border-gray-200 active:border-black items-center my-2 justify-start"
          >
            <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded ">
              <i className="ri-gps-fill"></i>
            </h2>
            <h4 className="font-medium">{elem}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
