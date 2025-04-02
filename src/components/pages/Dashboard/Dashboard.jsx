import React from "react";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { FiDollarSign } from "react-icons/fi";
import { PiCarProfileLight } from "react-icons/pi";
import { BsPeople } from "react-icons/bs";
import { Overview } from "./overflow";
import { VehicleStatus } from "./vehicle-status";
import RecentRental from "./Recent-Rental";
import UpcomingExpiration from "./upcoming-experition";

const Dashboard = () => {
  return (
    <div className="flex flex-col p-10 min-h-screen bg-[#0f0f0f] text-white">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <div className="bg-white text-black flex justify-center items-center px-5 gap-3 rounded-lg">
          <span className="text-lg">
            <LiaFileInvoiceSolid />
          </span>
          Download Request
        </div>
      </div>

      <div className="flex justify-between items-center my-5 gap-5">
        <div className="w-1/3 border rounded-lg bg-[#010101ad] h-35 p-5">
          <div className="flex justify-between">
            <span>Total Revenue </span>
            <FiDollarSign />
          </div>
          <div className="flex flex-col py-3">
            <div className="flex flex-row text-3xl font-bold">
              {" "}
              &#8377;45,231.89
            </div>
            <span className="text-[#a4a4a4f5]">+20.1% from last month</span>
          </div>
        </div>
        <div className="w-1/3 border rounded-lg bg-[#010101ad] h-35 p-5">
          <div className="flex justify-between">
            <span>Active Customers</span>
            <BsPeople/>
          </div>
          <div className="flex flex-col py-3">
            <div className="flex flex-row text-3xl font-bold">
              {" "}
              &#43;24
            </div>
            <span className="text-[#a4a4a4f5]">+12.2% from last month</span>
          </div>
        </div>
        <div className="w-1/3 border rounded-lg bg-[#010101ad] h-35 p-5">
          <div className="flex justify-between">
            <span>Available Vehicles</span>
            <PiCarProfileLight/>
          </div>
          <div className="flex flex-col py-3">
            <div className="flex flex-row text-3xl font-bold">
              12
            </div>
            <span className="text-[#a4a4a4f5]">3 vehicles currently rented</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between gap-5">
        <div className="flex-3 bg-[#010101ad] border-1 rounded-lg p-6">
          <h2 className="text-[26px] font-semibold">Revenue Overview</h2>
          {/* <span className="text-[#ffffff6c]">
            Monthly revenue and expenses
          </span> */}
          <div className="">
          <Overview/>
          </div>
        </div>
        <div className=" flex-2 bg-[#010101ad] border-1 rounded-lg p-6">
          <h2 className="text-[26px] font-semibold">Vehicle Status</h2>
          <span className="text-[#ffffff6c] text-sm">
            Current status of your vehicle fleet
          </span>
          <div>
            <VehicleStatus/>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between gap-5 my-5">
        <div className="flex-3 bg-[#010101ad] border-1 rounded-lg p-6">
          <h2 className="text-[26px] font-semibold">Recent Rentals</h2>
          <span className="text-sm text-[#ffffff6c]">
            Recent vehicle rentals and their status
          </span>
          <div><RecentRental/></div>
        </div>
        <div className=" flex-2 bg-[#010101ad] border-1 rounded-lg p-6">
          <h2 className="text-[26px] font-semibold">Upcoming Expirations</h2>
          <span className="text-sm text-[#ffffff6c]">
            Documents and permits that need attention
          </span>
          <div>
          <UpcomingExpiration/>
          </div>
        </div>
      </div>

      {/* <div className="bg-[#010101ad] w-1/2 h-10 rounded-lg my-5 flex justify-center py-2 px-4 focus-within:outline outline outline-[#ffffff1c]">
        <div className="text-xl"><CiSearch /></div>
        <input type="text" placeholder="Search customers..." className="border-none outline-none flex-1 px-2"/>
      </div> */}
    </div>
  );
};

export default Dashboard;
