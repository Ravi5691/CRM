import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { FiSave } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";

const UserManagement = () => {
  const users = [
    {
      name: "Admin User",
      email: "admin@example.com",
      role: "admin",
      status: "active",
      lastLogin: "2023-03-05 10:30 AM",
    },
    {
      name: "Manager User",
      email: "manager@example.com",
      role: "manager",
      status: "active",
      lastLogin: "2023-03-04 09:15 AM",
    },
    {
      name: "Employee One",
      email: "employee1@example.com",
      role: "employee",
      status: "active",
      lastLogin: "2023-03-05 08:45 AM",
    },
    {
      name: "Employee Two",
      email: "employee2@example.com",
      role: "employee",
      status: "inactive",
      lastLogin: "2023-02-28 11:20 AM",
    },
  ];
  const permissions = [
    {
      module: "Customer Management",
      admin: "Full Access",
      manager: "Full Access",
      employee: "View Only",
    },
    {
      module: "Vehicle Management",
      admin: "Full Access",
      manager: "Full Access",
      employee: "View Only",
    },
    {
      module: "Rental Management",
      admin: "Full Access",
      manager: "Full Access",
      employee: "Create, View",
    },
    {
      module: "Document Verification",
      admin: "Full Access",
      manager: "Full Access",
      employee: "Upload, View",
    },
    {
      module: "Financial Management",
      admin: "Full Access",
      manager: "View Only",
      employee: "No Access",
    },
    {
      module: "User Management",
      admin: "Full Access",
      manager: "No Access",
      employee: "No Access",
    },
  ];

  return (
    <div className="flex-col flex gap-5">
      <div className="p-6 border rounded-lg bg-[#010101ad]">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-[26px] font-semibold">User Management</h2>
            <span className="text-[#ffffff6c] text-sm">
              Manage user accounts and permissions
            </span>
          </div>
          <div className="flex items-center bg-white px-5 rounded-lg h-10 gap-3 text-black"> <IoMdAdd/> Add User</div>
        </div>
        <table className="w-full mt-4 ">
          <thead>
            <tr className="text-white text-left">
              <th className="p-2">User</th>
              <th className="p-2">Role</th>
              <th className="p-2">Status</th>
              <th className="p-2">Last Login</th>
              <th className=" p-2 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={index}
                className="text-left border-t hover:bg-[#ffffff0c]"
              >
                <td className="px-2 py-4">
                  <div className="flex place-items-center gap-3">
                    {" "}
                    <div className="bg-white w-10 h-10 rounded-full">
                      {" "}
                    </div>{" "}
                    <div>
                      {user.name}
                      <br />
                      <span className="text-sm text-gray-400">
                        {user.email}
                      </span>
                    </div>{" "}
                  </div>
                </td>
                <td className="px-2 py-4">{user.role}</td>
                <td className="px-2 py-4">{user.status}</td>
                <td className="px-2 py-4">{user.lastLogin}</td>
                <td className="text-right px-2 py-4">
                  <button className="text-white text-2xl">
                    <FaRegEdit />
                  </button>
                  <button className="text-red-500 ml-5 text-2xl">
                    <MdDeleteOutline />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-6 border rounded-lg bg-[#010101ad]">
        <h2 className="text-[26px] font-semibold">Role Permissions</h2>
        <span className="text-[#ffffff6c] text-sm">
          Configure access permissions for each role
        </span>
        <table className="w-full mt-4">
          <thead>
            <tr className=" text-white text-left">
              <th className="p-2">Module</th>
              <th className="p-2">Admin</th>
              <th className="p-2">Manager</th>
              <th className="p-2">Employee</th>
            </tr>
          </thead>
          <tbody>
            {permissions.map((permission, index) => (
              <tr
                key={index}
                className="text-left border-t hover:bg-[#ffffff0c]"
              >
                <td className="px-2 py-4">{permission.module}</td>
                <td className="px-2 py-4">{permission.admin}</td>
                <td className="px-2 py-4">{permission.manager}</td>
                <td className="px-2 py-4">{permission.employee}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="bg-white flex gap-2 items-center text-black p-2 rounded-lg mt-5">
          <FiSave />
          Save Permissions
        </button>
      </div>
    </div>
  );
};

export default UserManagement;
