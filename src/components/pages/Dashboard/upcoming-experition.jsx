import React from "react";
import { FiBell } from "react-icons/fi";

const UpcomingExpiration = () => {
  const expirations = [
    {
      title: "Insurance Expiring",
      details: "KA-01-AB-1234 insurance expires in 15 days",
      color: 'orange-500',
    },
    {
      title: "Pollution Certificate",
      details: "KA-01-CD-5678 PUC expires in 5 days",
      color: 'red-500',
    },
    {
      title: "Commercial Permit",
      details: "KA-01-EF-9012 permit expires in 30 days",
      color: 'yellow-400',
    },
  ];

  return (
    <div className=" text- mt-5">
      {expirations.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center p-3 mb-3 border  rounded-lg"
        >
          <div className="flex items-center gap-2">
            <div className={`text-${item.color} text-xl`}> <FiBell/> </div>
            <div>
              <strong className="block">{item.title}</strong>
              <p>{item.details}</p>
            </div>
          </div>
          <button className="hover:bg-[#ffffff1d] border border-[#ffffff1d] p-1 px-3 rounded-lg">
            Renew
          </button>
        </div>
      ))}
    </div>
  );
};

export default UpcomingExpiration;
