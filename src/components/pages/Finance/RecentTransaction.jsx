import React from "react";
import { MdOutlineDateRange } from "react-icons/md";

const transactions = [
  {
    id: "TRX-001",
    date: "2023-03-01",
    customer: "Rahul Sharma",
    description: "Rental payment for KA-01-AB-1234",
    amount: 5600,
    type: "income",
  },
  {
    id: "TRX-002",
    date: "2023-03-02",
    customer: "Priya Patel",
    description: "Rental payment for KA-01-CD-5678",
    amount: 7500,
    type: "income",
  },
  {
    id: "TRX-003",
    date: "2023-03-03",
    customer: "Admin",
    description: "Fuel expense for KA-01-AB-1234",
    amount: 1200,
    type: "expense",
  },
  {
    id: "TRX-004",
    date: "2023-03-04",
    customer: "Admin",
    description: "Vehicle maintenance - KA-01-EF-9012",
    amount: 3500,
    type: "expense",
  },
  {
    id: "TRX-005",
    date: "2023-03-05",
    customer: "Sneha Reddy",
    description: "Rental payment for KA-01-GH-3456",
    amount: 8500,
    type: "income",
  },
];

const RecentTransaction = () => {
  return (
    <div className="">
      <h2 className="text-[26px] font-semibold">Transaction History</h2>
      <span className="text-[#ffffff6c] text-sm">
        Recent financial transactions
      </span>
      <table className="w-full mt-4">
        <thead>
          <tr className="text-left">
            <th className="p-2">Transaction ID</th>
            <th className="p-2">Date</th>
            <th className="p-2">Description</th>
            <th className="p-2">Customer</th>
            <th className="p-2">Amount</th>
            <th className="p-2">Type</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="border-t hover:bg-[#ffffff0c]">
              <td className="px-2 py-4">{transaction.id}</td>
              <td className="px-2 py-4 flex place-items-center gap-1"><MdOutlineDateRange/>{new Date(transaction.date).toLocaleDateString()}</td>
              <td className="px-2 py-4">{transaction.description}</td>
              <td className="px-2 py-4">{transaction.customer}</td>
              <td className="px-2 py-4">₹{transaction.amount}</td>
              <td className="px-2 py-4">
                <span
                  className={`px-4 py-1 rounded-full text-sm text-center ${
                    transaction.type === "income" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-700"
                  }`}
                >
                  {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentTransaction;
