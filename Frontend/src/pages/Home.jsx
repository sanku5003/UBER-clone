import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/vehiclePanel";
import ConfirmedRide from "../components/ConfirmedRide";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setOpenPanel] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const [confirmedRidePanel, setConfirmedRidePanel] = useState(false);
  const confirmedRideRef = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          opacity: 1,
          padding: 24,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          opacity: 0,
          padding: 0,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen],
  );

  useGSAP(
    function () {
      if (vehiclePanel) {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehiclePanel],
  );
  useGSAP(
    function () {
      if (confirmedRidePanel) {
        gsap.to(confirmedRideRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmedRideRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmedRidePanel],
  );

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://imgs.search.brave.com/mqZ2TMeO2R6hJQCG1z0AaA9OxbbmsB5ydQ67hFv0At0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY1OTc2MTEw/MHViZXItbG9nby1w/bmcucG5n"
        alt=""
      />

      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className=" flex flex-col justify-end absolute top-0 w-full h-screen  ">
        <div className="H-[30%] bg-white p-6 relative">
          <h5
            ref={panelCloseRef}
            className="absolute opacity-0 top-1 left-[45%] text-xl "
            onClick={() => {
              setOpenPanel(false);
            }}
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold ">Find a trip</h4>
          <form
            onSubmit={(e) => {
              formHandler(e);
            }}
          >
            <div className="line absolute h-16 top-[45%] w-1 left-10 bg-gray-700 rounded-full "></div>
            <input
              onClick={() => {
                setOpenPanel(true);
              }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a pickup location"
            />
            <input
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5"
              type="text"
              onClick={() => {
                setOpenPanel(true);
              }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              placeholder="Enter Your Destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="h-[0%] bg-white ">
          <LocationSearchPanel
            vehiclePanel={vehiclePanel}
            setVehiclePanel={setVehiclePanel}
            panelOpen={panelOpen}
            setPanelOpen={setOpenPanel}
          />
        </div>
      </div>
      <div
        ref={vehiclePanelRef}
        className="fixed w-full z-10 bottom-0  bg-white px-3 py-6 translate-y-full"
      >
        <VehiclePanel
          setOpenPanel={setOpenPanel}
          setVehiclePanel={setVehiclePanel}
          setConfirmedRidePanel={setConfirmedRidePanel}
        />
      </div>
      <div
        ref={confirmedRideRef}
        className="fixed w-full z-10 bottom-0  bg-white px-3 py-6 translate-y-full"
      >
        <ConfirmedRide setConfirmedRidePanel = {setConfirmedRidePanel} setVehiclePanel = {setVehiclePanel} />
      </div>
      <div
        ref={confirmedRideRef}
        className="fixed w-full z-10 bottom-0  bg-white px-3 py-6 translate-y-full"
      >
        <ConfirmedRide setConfirmedRidePanel = {setConfirmedRidePanel} setVehiclePanel = {setVehiclePanel} />
      </div>
    </div>
  );
};

export default Home;
