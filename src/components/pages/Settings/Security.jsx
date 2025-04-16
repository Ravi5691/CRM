import React from "react";
import { FiSave } from "react-icons/fi";
import ToggleBtn from "../../toggleBtn";

const Security = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="p-6 border rounded-lg bg-[#010101ad]">
        <h2 className="text-[26px] font-semibold">Security Settings</h2>
        <span className="text-[#ffffff6c] text-sm">
          Configure security and authentication settings
        </span>

        <div className="my-4">
          <span className="text-lg">Password Policy</span>
          <div className="mt-4 flex-col flex gap-2">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span>Minimum Password Length</span>
                <span className="text-[#ffffff6c]">
                  Set the minimum required password length
                </span>
              </div>
              <div className="">
                <select
                  className="form-select mt-1 block font-semibold pl-3 pr-10 py-2 text-base bg-[#010101de] border border-[#ffffff2f] focus:outline-none sm:text-sm rounded-md ascent-[
                #ffffff]"
                >
                  <option selected value="6">
                    6 characters
                  </option>
                  <option value="8">8 characters</option>
                  <option value="10">10 characters</option>
                  <option value="12">12 characters</option>
                </select>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <span>Require Special Characters</span>
                <span className="text-[#ffffff6c]">
                  Passwords must contain special characters
                </span>
              </div>
              <div><ToggleBtn/></div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <span>Require Numbers</span>
                <span className="text-[#ffffff6c]">
                  Passwords must contain at least one number
                </span>
              </div>
              <div><ToggleBtn/></div>
            </div>
          </div>
        </div>

        <div className="my-4">
          <span className="text-lg">Account Security</span>
          <div className="mt-4 flex-col flex gap-2">
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <span>Two-Factor Authentication</span>
                <span className="text-[#ffffff6c]">
                  Require two-factor authentication for all users
                </span>
              </div>
              <div><ToggleBtn/></div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span>Password Expiry</span>
                <span className="text-[#ffffff6c]">
                 Force password reset after specified period
                </span>
              </div>
              <div className="">
                <select
                  className="form-select mt-1 block font-semibold pl-3 pr-10 py-2 text-base bg-[#010101de] border border-[#ffffff2f] focus:outline-none sm:text-sm rounded-md ascent-[
                #ffffff]"
                >
                  <option  value="30">
                    30 Days
                  </option>
                  <option value="60">60 Days </option>
                  <option selected value="90">90 Days </option>
                  <option value="0">Never</option>
                </select>
              </div>
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
          </div>
        </div>

        <div className="my-4">
          <span className="text-lg">API Security</span>
          <div className="mt-4 flex-col flex gap-2">
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <span>API Key Management</span>
                <span className="text-[#ffffff6c]">
                Enable API key management for integrations
                </span>
              </div>
              <div><ToggleBtn/></div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <span>API Rate Limiting</span>
                <span className="text-[#ffffff6c]">
                Limit API requests to prevent abuse
                </span>
              </div>
              <div><ToggleBtn/></div>
            </div>
          </div>
        </div>

        <button className="bg-white flex gap-2 items-center text-black p-2 rounded-lg mt-5">
          <FiSave />
          Save Security Settings
        </button>
      </div>

      <div className="p-6 border rounded-lg bg-[#010101ad]">
        <h2 className="text-[26px] font-semibold">Data Protection</h2>
        <span className="text-[#ffffff6c] text-sm">
          Configure data protection and privacy settings
        </span>

        <div className="my-4">
          <div className="mt-4 flex-col flex gap-2">
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <span>Data Encryption</span>
                <span className="text-[#ffffff6c]">
                Enable encryption for sensitive data
                </span>
              </div>
              <div><ToggleBtn/></div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <span>Automated Backups</span>
                <span className="text-[#ffffff6c]">
                Enable automated data backups
                </span>
              </div>
              <div><ToggleBtn/></div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <span>Data Retention Policy</span>
                <span className="text-[#ffffff6c]">
                Automatically delete old data based on retention policy
                </span>
              </div>
              <div><ToggleBtn/></div>
            </div>
          </div>
        </div>

        <button className="bg-white flex gap-2 items-center text-black p-2 rounded-lg mt-5">
          <FiSave />
          Save Data Protection Settings
        </button>
      </div>
    </div>
  );
};

export default Security;
