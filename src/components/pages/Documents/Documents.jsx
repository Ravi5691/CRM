import React, { useState } from "react";
import { MdOutlineFileUpload } from "react-icons/md";
import { MdOutlineFileDownload } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";
import CustomerDocuments from "./CustomerDocuments";
import VehicleDocuments from "./VehicleDocuments";

const Documents = () => {
  const [content, setContent] = useState("General Settings");
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (newContent, index) => {
    setContent(newContent);
    setActiveIndex(index);
  };

  return (
    <div className="flex flex-col p-10 min-h-screen bg-[#0f0f0f] text-white">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Documents</h1>
        <div className="flex justify-center items-center gap-3">
          <div className="bg-white text-black px-4 py-2 rounded-lg flex justify-center items-center gap-2 cursor-pointer">
            {" "}
            <div className="text-xl">
              {" "}
              <MdOutlineFileUpload />
            </div>{" "}
            Upload Document
          </div>
          <div className="bg-[#010101ad] text-white border rounded-lg border-[#ffffff1c] px-4 py-2 flex justify-center items-center gap-2 cursor-pointer">
            {" "}
            <div className="text-xl">
              <MdOutlineFileDownload />
            </div>{" "}
            Export
          </div>
        </div>
      </div>

      <div className="my-5 flex justify-between items-center">
        <div className="bg-[#010101ad] w-1/2 h-10 rounded-lg flex justify-center py-2 px-4 focus-within:outline outline outline-[#ffffff1c]">
          <div className="text-xl">
            <CiSearch />
          </div>
          <input
            type="text"
            placeholder="Search Documents..."
            className="border-none outline-none flex-1 px-2"
          />
        </div>
        <div className="text-2xl p-2 bg-[#010101ad]  border border-[#ffffff1c] rounded-lg cursor-pointer">
          <CiFilter />
        </div>
      </div>

      <div className="w-full h-12 rounded-lg my-5 flex justify-between p-1 bg-[#252525]">
        <div
          className={`flex w-1/2 justify-center items-center ${
            activeIndex === 0 ? "bg-[#0a0a0a]" : ""
          }`}
          onClick={() => handleClick("Customer Documents", 0)}
        >
          Customer Documents
        </div>
        <div
          className={`flex w-1/2 justify-center items-center ${
            activeIndex === 1 ? "bg-[#0a0a0a]" : ""
          }`}
          onClick={() => handleClick("Vehicle Documents", 1)}
        >
          Vehicle Documents
        </div>
      </div>
      <div>
        {activeIndex === 0 && <CustomerDocuments />}
        {activeIndex === 1 && <VehicleDocuments />}
      </div>
    </div>
  );
};

export default Documents;
