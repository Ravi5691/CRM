import React from "react";
import { FiSave } from "react-icons/fi";
import ToggleBtn from "../../toggleBtn";
const Notifications = () => {
  return (
    <div>
      <div className="p-6 border rounded-lg bg-[#010101ad]">
        <h2 className="text-[26px] font-semibold">Notification Settings</h2>
        <span className="text-[#ffffff6c] text-sm">
          Configure system notifications and alerts
        </span>
        <div className="my-4">
          <span className="text-lg">Document Expiry Notifications</span>
          <div className="mt-4 flex-col flex gap-2">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span>Vehicle Insurance</span>
                <span className="text-[#ffffff6c]">
                  Notify before vehicle insurance expires
                </span>
              </div>
              <div className="">
                <select
                  className="form-select mt-1 block font-semibold pl-3 pr-10 py-2 text-base bg-[#010101de] border border-[#ffffff2f] focus:outline-none sm:text-sm rounded-md ascent-[
                #ffffff]"
                >
                  <option selected value="15">
                    15 Days Before
                  </option>
                  <option value="30">30 Days Before</option>
                  <option value="60">60 Days Before</option>
                </select>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span>Vehicle Insurance</span>
                <span className="text-[#ffffff6c]">
                  Notify before vehicle insurance expires
                </span>
              </div>
              <div className="">
                <select
                  className="form-select mt-1 block font-semibold pl-3 pr-10 py-2 text-base bg-[#010101de] border border-[#ffffff2f] focus:outline-none sm:text-sm rounded-md ascent-[
                #ffffff]"
                >
                  <option selected value="15">
                    15 Days Before
                  </option>
                  <option value="30">30 Days Before</option>
                  <option value="60">60 Days Before</option>
                </select>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span>Vehicle Insurance</span>
                <span className="text-[#ffffff6c]">
                  Notify before vehicle insurance expires
                </span>
              </div>
              <div className="">
                <select
                  className="form-select mt-1 block font-semibold pl-3 pr-10 py-2 text-base bg-[#010101de] border border-[#ffffff2f] focus:outline-none sm:text-sm rounded-md ascent-[
                #ffffff]"
                >
                  <option selected value="15">
                    15 Days Before
                  </option>
                  <option value="30">30 Days Before</option>
                  <option value="60">60 Days Before</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="my-4">
          <span className="text-lg">Rental Notifications</span>
          <div className="mt-4 flex-col flex gap-2">
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <span>Rental Start</span>
                <span className="text-[#ffffff6c]">
                  Notify when a rental period starts
                </span>
              </div>
              <div><ToggleBtn/></div>
            </div>
            <div className="flex justify-between item-center">
              <div className="flex flex-col">
                <span>Rental End</span>
                <span className="text-[#ffffff6c]">
                  Notify when a rental period is about to end
                </span>
              </div>
              <div><ToggleBtn/></div>
            </div>
            <div className="flex justify-between item-center">
              <div className="flex flex-col">
                <span>Rental Overdue</span>
                <span className="text-[#ffffff6c]">
                  Notify when a vehicle return is overdue
                </span>
              </div>
              <div><ToggleBtn/></div>
            </div>
          </div>
        </div>
        <div className="my-4">
          <span className="text-lg">System Notifications</span>
          <div className="mt-4 flex-col flex gap-2">
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <span>New Customer</span>
                <span className="text-[#ffffff6c]">
                  Notify when a new customer is registered
                </span>
              </div>
              <div><ToggleBtn/></div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <span>Payment Received</span>
                <span className="text-[#ffffff6c]">
                  Notify when a payment is received
                </span>
              </div>
              <div><ToggleBtn/></div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <span>System Updates</span>
                <span className="text-[#ffffff6c]">
                  Notify when system updates are available
                </span>
              </div>
              <div><ToggleBtn/></div>
            </div>
          </div>
        </div>

       <button className="bg-white flex gap-2 items-center text-black p-2 rounded-lg mt-5">
          <FiSave />
          Save Notification Settings
        </button>
      </div>
    </div>
  );
};

export default Notifications;
