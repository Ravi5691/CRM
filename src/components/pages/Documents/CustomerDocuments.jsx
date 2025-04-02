import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import { CgDanger } from "react-icons/cg";

const documents = [
  {
    id: "DOC-001",
    customer: "Rahul Sharma",
    customerId: "CUST-001",
    documentType: "Aadhar Card",
    number: "XXXX-XXXX-1234",
    uploadDate: "1/15/2023",
    status: "Verified",
  },
  {
    id: "DOC-002",
    customer: "Rahul Sharma",
    customerId: "CUST-001",
    documentType: "Driving License",
    number: "DL-123456789",
    uploadDate: "2/10/2023",
    status: "Verified",
  },
  {
    id: "DOC-003",
    customer: "Priya Patel",
    customerId: "CUST-002",
    documentType: "Aadhar Card",
    number: "XXXX-XXXX-5678",
    uploadDate: "1/20/2023",
    status: "Verified",
  },
  {
    id: "DOC-004",
    customer: "Priya Patel",
    customerId: "CUST-002",
    documentType: "Driving License",
    number: "DL-987654321",
    uploadDate: "2/15/2023",
    status: "Pending",
  },
  {
    id: "DOC-005",
    customer: "Amit Kumar",
    customerId: "CUST-003",
    documentType: "Aadhar Card",
    number: "XXXX-XXXX-9012",
    uploadDate: "1/25/2023",
    status: "Verified",
  },
];

const CustomerDocuments = () => {
  return (
    <div className="w-full bg-[#010101ad] border-1 rounded-lg p-6">
      <h2 className="text-[26px] font-semibold">Customer Documents</h2>
      <span className="text-sm text-[#ffffff6c]">
        Manage and verify customer identification documents
      </span>
      <table className="w-full mt-4 text-left">
        <thead>
          <tr className="text-left">
            <th className="p-2">Document ID</th>
            <th className="p-2">Customer</th>
            <th className="p-2">Document Type</th>
            <th className="p-2">Number</th>
            <th className="p-2">Upload Date</th>
            <th className="p-2">Status</th>
            <th className="p-2 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="text-[14px]">
          {documents.map((doc) => (
            <tr
              key={doc.id}
              className="border-t hover:bg-[#ffffff0c] font-semibold"
            >
              <td className="px-2 py-4">{doc.id}</td>
              <td className="px-2 py-4">
                <strong>{doc.customer}</strong>
                <br />
                {doc.customerId}
              </td>
              <td className="px-2 py-4">{doc.documentType}</td>
              <td className="px-2 py-4">{doc.number}</td>
              <td className="px-2 py-4">{doc.uploadDate}</td>
              <td className="px-2 py-4">
                <span
                  className={`${
                    doc.status === "Verified"
                      ? "text-green-500"
                      : "text-orange-500"
                  } flex items-center`}
                >
                  {doc.status === "Verified" ? (
                    <CiCircleCheck className="mr-1 text-xl" />
                  ) : (
                    <CgDanger className="mr-1 text-xl" />
                  )}
                  {doc.status}
                </span>
              </td>
              <td className="px-2 py-4 text-right">
                <button className="hover:bg-[#ffffff1d] p-2 px-3 rounded-lg cursor-pointer">
                  View
                </button>
                {doc.status === "Pending" && (
                  <button className=" border ml-2 border-[#ffffff1d] hover:bg-[#ffffff1d] p-2 px-3 rounded-lg cursor-pointer">
                    Verify
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerDocuments;
