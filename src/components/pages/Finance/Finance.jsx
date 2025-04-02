import React, { useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import RecentTransaction from "./RecentTransaction";
import { LuTrendingUp } from "react-icons/lu";
import { LuTrendingDown } from "react-icons/lu";
import { FiDollarSign } from "react-icons/fi";
import { FiCreditCard } from "react-icons/fi";
import Invoice from "./Invoice";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const monthlyRevenue = [
  { name: "Jan", revenue: 35000, expenses: 15000 },
  { name: "Feb", revenue: 42000, expenses: 18000 },
  { name: "Mar", revenue: 50000, expenses: 22000 },
  { name: "Apr", revenue: 45000, expenses: 20000 },
  { name: "May", revenue: 55000, expenses: 25000 },
  { name: "Jun", revenue: 60000, expenses: 28000 },
];

const revenueByCategory = [
  { name: "Sedan", value: 45000 },
  { name: "SUV", value: 65000 },
  { name: "Hatchback", value: 25000 },
  { name: "Luxury", value: 15000 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Finance = () => {
  const [content, setContent] = useState("General Settings");
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (newContent, index) => {
    setContent(newContent);
    setActiveIndex(index);
  };

  return (
    <div className="flex flex-col p-10 min-h-screen bg-[#0f0f0f] text-white">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Financial Management</h1>
        <div className="flex justify-center items-center gap-3">
          <div className="bg-white text-black px-4 py-2 rounded-lg flex justify-center items-center gap-2 cursor-pointer">
            {" "}
            <div className="text-xl">
              <LiaFileInvoiceSolid />
            </div>
            Generate Invoice
          </div>
          <div className="bg-[#010101ad] text-white border rounded-lg border-[#ffffff1c] px-4 py-2 flex justify-center items-center gap-2 cursor-pointer">
            <MdOutlineFileDownload /> <div className="text-xl"></div> Export
            Report
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center my-5 gap-5">
        <div className="w-1/4 border rounded-lg h-32 px-5 py-5 ">
          <div className="flex justify-between">
            <span>Total Revenue </span>
            <FiDollarSign />
          </div>
          <div className="flex flex-col py-2">
            <div className="flex flex-row text-2xl font-bold">
              {" "}
              &#8377;45,231.89
            </div>
            <span className="text-green-500 text-sm flex flex-row place-items-center gap-1">
              {" "}
              <LuTrendingUp /> +20.1% from last month
            </span>
          </div>
        </div>
        <div className="w-1/4 border rounded-lg h-32 px-5 py-5 ">
          <div className="flex justify-between">
            <span>Total Expenses </span>
            <FiCreditCard />
          </div>
          <div className="flex flex-col py-2">
            <div className="flex flex-row text-2xl font-bold">
              {" "}
              &#8377;1,28,000
            </div>
            <span className="text-red-500 text-sm flex flex-row place-items-center gap-1">
              {" "}
              <LuTrendingDown /> +20.1% from last month
            </span>
          </div>
        </div>
        <div className="w-1/4 border rounded-lg h-32 px-5 py-5 ">
          <div className="flex justify-between">
            <span>Net Profit </span>
            <FiDollarSign />
          </div>
          <div className="flex flex-col py-2">
            <div className="flex flex-row text-2xl font-bold">
              {" "}
              &#8377;1,59,000
            </div>
            <span className="text-green-500 text-sm flex flex-row place-items-center gap-1">
              {" "}
              <LuTrendingUp /> +20.1% from last month
            </span>
          </div>
        </div>
        <div className="w-1/4 border rounded-lg h-32 px-5 py-5 ">
          <div className="flex justify-between">
            <span>Active Rentals </span>
            <LiaFileInvoiceSolid />
          </div>
          <div className="flex flex-col py-2">
            <div className="flex flex-row text-2xl font-bold"> 15</div>
            <span className="text-green-500 text-sm flex flex-row place-items-center gap-1">
              {" "}
              <LuTrendingUp /> +3 from last week
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between gap-5">
        <div className="flex-3 bg-[#010101ad] border-1 rounded-lg p-6">
          <h2 className="text-[26px] font-semibold">Revenue Overview</h2>
          <span className="text-[#ffffff6c] text-sm">
            Monthly revenue and expenses
          </span>
          <div className="pt-5">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={monthlyRevenue}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => [`₹${value}`, ""]} />
                <Legend />
                <Bar dataKey="revenue" name="Revenue" fill="#0088FE" />
                <Bar dataKey="expenses" name="Expenses" fill="#FF8042" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className=" flex-2 bg-[#010101ad] border-1 rounded-lg p-6">
          <h2 className="text-[26px] font-semibold">Revenue by Vehicle Type</h2>
          <span className="text-[#ffffff6c] text-sm">
            Distribution of revenue across vehicle categories
          </span>
          <div className="pt-5">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={revenueByCategory}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name}: ${(percent * 100).toFixed(0)}%`
                  }
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {revenueByCategory.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`₹${value}`, "Revenue"]} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="w-full h-12 rounded-lg my-5 flex justify-between p-1 bg-[#252525]">
        <div
          className={`flex w-1/2 justify-center items-center ${
            activeIndex === 0 ? "bg-[#0a0a0a]" : ""
          }`}
          onClick={() => handleClick("Recent Transaction", 0)}
        >
          Recent Transaction
        </div>
        <div
          className={`flex w-1/2 justify-center items-center ${
            activeIndex === 1 ? "bg-[#0a0a0a]" : ""
          }`}
          onClick={() => handleClick("Invoice", 1)}
        >
          Invoice
        </div>
      </div>
      <div className="border rounded-lg p-6 bg-[#0a0a0a]">
        {activeIndex === 0 && <RecentTransaction />}
        {activeIndex === 1 && <Invoice />}
      </div>
    </div>
  );
};

export default Finance;
