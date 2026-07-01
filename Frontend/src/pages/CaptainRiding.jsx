import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import FinishRide from "../components/FinishRide";

const CaptainRiding = () => {
const [finishRidePanel , setFinishRidePanel] = useState(false);
const finishRidePanelRef = useRef(null);

  useGSAP(
    function () {
      if (finishRidePanel) {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [finishRidePanel],
  );
  return (
    <div>
      <div className="h-screen">
        <div className="fixed p-4 w-full top-0 flex items-center justify-between">
          <img
            className="w-16"
            src="https://imgs.search.brave.com/mqZ2TMeO2R6hJQCG1z0AaA9OxbbmsB5ydQ67hFv0At0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY1OTc2MTEw/MHViZXItbG9nby1w/bmcucG5n"
            alt=""
          />
          <Link
            to={"/captain-login"}
            className="  h-10 w-10 bg-white flex items-center justify-center rounded-full"
          >
            <i className="text-xl font-bold ri-logout-box-r-line"></i>
          </Link>
        </div>
        <div className="h-4/5">
          <img
            className="h-full w-full object-cover"
            src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
            alt=""
          />
        </div>

        <div className="fixed w-full h-1/5  bg-yellow-400" onClick={() => setFinishRidePanel(true)}>
          <h5 className="relative left-[50%] text-xl ">
            <i className="ri-arrow-up-wide-line"></i>
          </h5>
          <div className="p-6 flex items-center  justify-between">
            <h4 className="text-xl font-semibold">4 KM Away</h4>
            <button className=" bg-green-600 text-white font-semibold rounded px-6 py-3">
              Complete Ride
            </button>
          </div>
        </div>
        <div
          ref={finishRidePanelRef}
          className="fixed w-full z-10 translate-y-full bottom-0  bg-white px-3 py-6"
        >
          <FinishRide />
        </div>
      </div>
    </div>
  );
};

export default CaptainRiding;
