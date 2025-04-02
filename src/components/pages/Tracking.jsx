import React from "react";
import { CiSearch } from "react-icons/ci";
import { TbCurrentLocation } from "react-icons/tb";

const Tracking = () => {
  return (
    <div className="flex flex-col p-10 h-screen bg-[#0f0f0f] text-white">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Vehicle Tracking</h1>
        <div className="bg-white text-black flex justify-center items-center px-5 gap-3 rounded-lg">
          <span className="text-lg">
            <TbCurrentLocation />
          </span>{" "}
          Refresh Locations
        </div>
      </div>
      <div className="bg-[#010101ad] w-1/2 h-10 rounded-lg my-5 flex justify-center py-2 px-4 focus-within:outline outline outline-[#ffffff1c]">
        <div className="text-xl">
          <CiSearch />
        </div>
        <input
          type="text"
          placeholder="Search by customer or vehicle..."
          className="border-none outline-none flex-1 px-2"
        />
      </div>

      <div className="flex flex-row justify-between gap-5">
        <div className="flex-1 bg-[#010101ad] border-1 rounded-lg h-100 p-6">
          <h2 className="text-3xl font-semibold">Active Rentals</h2>
          <span className="text-[#ffffff6c]">
            Track vehicles currently on rent
          </span>
        </div>
        <div className=" flex-2 bg-[#010101ad] border-1 rounded-lg h-100 p-6">
          <h2 className="text-3xl font-semibold">Location Details</h2>
          <span className="text-[#ffffff6c]">
            Current location of selected vehicle
          </span>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Tracking;
