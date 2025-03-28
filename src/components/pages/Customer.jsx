import React from "react";
import { CiSearch } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";

const customers = [
  {
    id: "CUST-001",
    name: "Rahul Sharma",
    email: "rahul@example.com",
    phone: "+91 98765 43210",
    address: "123 Main St, Bangalore",
    activeRentals: 1,
    totalRentals: 5,
    status: "active",
    avatar: "/placeholder.svg",
  },
  {
    id: "CUST-002",
    name: "Priya Patel",
    email: "priya@example.com",
    phone: "+91 87654 32109",
    address: "456 Park Ave, Mumbai",
    activeRentals: 1,
    totalRentals: 3,
    status: "active",
    avatar: "/placeholder.svg",
  },
  {
    id: "CUST-003",
    name: "Amit Kumar",
    email: "amit@example.com",
    phone: "+91 76543 21098",
    address: "789 Oak St, Delhi",
    activeRentals: 0,
    totalRentals: 8,
    status: "inactive",
    avatar: "/placeholder.svg",
  },
  {
    id: "CUST-004",
    name: "Sneha Reddy",
    email: "sneha@example.com",
    phone: "+91 65432 10987",
    address: "101 Pine Rd, Hyderabad",
    activeRentals: 1,
    totalRentals: 2,
    status: "active",
    avatar: "/placeholder.svg",
  },
  {
    id: "CUST-005",
    name: "Vikram Singh",
    email: "vikram@example.com",
    phone: "+91 54321 09876",
    address: "202 Maple Dr, Chennai",
    activeRentals: 0,
    totalRentals: 4,
    status: "inactive",
    avatar: "/placeholder.svg",
  },
]

const Customer = () => {
  return (
    <div className="flex flex-col p-10 h-screen bg-[#0a0a0a] text-white">
      <div className="flex justify-between">
      <h1 className="text-4xl font-bold">Customers</h1>
      <div className="bg-white text-black flex justify-center items-center px-5 gap-3 rounded-lg"><span className="text-lg"><FiPlus/></span> Add Customers</div>
      </div>
      <div className="bg-[#010101ad] w-1/2 h-10 rounded-lg my-5 flex justify-center py-2 px-4 focus-within:outline outline outline-[#ffffff1c]">
        <div className="text-xl"><CiSearch /></div>
        <input type="text" placeholder="Search customers..." className="border-none outline-none flex-1 px-2"/>
      </div>

      <div className="w-full bg-[#010101ad] border-1 rounded-lg h-100 p-6">
        <h2 className="text-3xl font-semibold">Customer Database</h2>
        <span className="text-[#ffffff6c]">Manage your customers and their rental history</span>
      </div>
    </div>
  );
};

export default Customer;
