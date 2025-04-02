import React from "react";
import { CiSearch } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineLocalPostOffice } from "react-icons/md";

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
];

const getStatusClass = (status) => {
  return status === "active" ? "bg-white text-black" : "bg-[#ffffff20] text-white";
};

const Customer = () => {
  return (
    <div className="flex flex-col p-10 h-screen bg-[#0f0f0f] text-white">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Customers</h1>
        <div className="bg-white text-black flex justify-center items-center px-5 gap-3 rounded-lg">
          <span className="text-lg">
            <FiPlus />
          </span>{" "}
          Add Customers
        </div>
      </div>
      <div className="bg-[#010101ad] w-1/2 h-10 rounded-lg my-5 flex justify-center py-2 px-4 focus-within:outline outline outline-[#ffffff1c]">
        <div className="text-xl">
          <CiSearch />
        </div>
        <input
          type="text"
          placeholder="Search customers..."
          className="border-none outline-none flex-1 px-2"
        />
      </div>

      <div className="w-full bg-[#010101ad] border-1 rounded-lg p-6">
        <h2 className="text-[26px] font-semibold">Transaction History</h2>
        <span className="text-[#ffffff6c] text-sm">
          Recent financial transactions
        </span>
        <table className="min-w-full mt-4 text-left">
          <thead>
            <tr>
              <th className="px-4 py-2">Customer</th>
              <th className="px-4 py-2">Contact</th>
              <th className="px-4 py-2">Rentals</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="border-t hover:bg-[#ffffff0c]">
                <td className="px-4 py-4 flex items-center">
                  <img
                    src={customer.avatar}
                    alt="avatar"
                    className="w-10 h-10 rounded-full bg-amber-50 mr-3"
                  />
                  <div>
                    <div>{customer.name}</div>
                    <div className="text-sm text-gray-400">{customer.id}</div>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    <IoCallOutline/>
                    {customer.phone}
                  </div>
                  <div className="flex items-center gap-2">
                    <MdOutlineLocalPostOffice/>
                    {customer.email}
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div>{customer.activeRentals} active</div>
                  <div className="text-sm text-gray-400">
                    {customer.totalRentals} total
                  </div>
                </td>
                <td className="px-4 py-4 text-sm">
                  <span
                    className={`px-3 py-1 rounded-full ${getStatusClass(
                      customer.status
                    )}`}
                  >
                    {customer.status}
                  </span>
                </td>
                <td className="px-4 py-4 text-right">
                  <button className="hover:bg-[#ffffff1d] p-2 px-3 rounded-lg">
                    View
                  </button>
                  <button className=" border ml-2 border-[#ffffff1d] hover:bg-[#ffffff1d] p-2 px-3 rounded-lg">
                    Rentals
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customer;
