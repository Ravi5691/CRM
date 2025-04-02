import React from "react";
import { LiaFileInvoiceSolid } from "react-icons/lia";

const Invoice = () => {
  return (
    <div className="">
      <h2 className="text-[26px] font-semibold">Invoice Management</h2>
      <span className="text-[#ffffff6c] text-sm">
        Generate and manage customer invoices
      </span>

      <div className="border border-dashed border-[#ffffff52] rounded-lg h-50 mt-5 flex flex-col justify-center place-items-center">
        <LiaFileInvoiceSolid className="text-6xl"/>
        <span className="text-xl font-bold">No invoices generated yet</span>
        <span className="text-[#ffffff6c]">Use the "Generate Invoice" button to create a new invoice</span>
      </div>
    </div>
  );
};

export default Invoice;
