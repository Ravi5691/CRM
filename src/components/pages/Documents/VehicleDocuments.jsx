import React from 'react';

const documents = [
  {
    id: 'VDOC-001',
    vehicle: 'KA-01-AB-1234 (Honda City)',
    vehicleId: 'VEH-001',
    type: 'Registration Certificate',
    number: 'RC-123456',
    expiry: '12/31/2025',
    status: 'Active',
  },
  {
    id: 'VDOC-002',
    vehicle: 'KA-01-AB-1234 (Honda City)',
    vehicleId: 'VEH-001',
    type: 'Insurance',
    number: 'INS-123456',
    expiry: '3/25/2023',
    status: 'Expiring Soon',
  },
  {
    id: 'VDOC-003',
    vehicle: 'KA-01-AB-1234 (Honda City)',
    vehicleId: 'VEH-001',
    type: 'Pollution Certificate',
    number: 'PUC-123456',
    expiry: '6/15/2023',
    status: 'Active',
  },
  {
    id: 'VDOC-004',
    vehicle: 'KA-01-CD-5678 (Hyundai Creta)',
    vehicleId: 'VEH-002',
    type: 'Registration Certificate',
    number: 'RC-789012',
    expiry: '10/15/2026',
    status: 'Active',
  },
  {
    id: 'VDOC-005',
    vehicle: 'KA-01-CD-5678 (Hyundai Creta)',
    vehicleId: 'VEH-002',
    type: 'Insurance',
    number: 'INS-789012',
    expiry: '3/10/2023',
    status: 'Expired',
  },
];

const getStatusClass = (status) => {
  switch (status) {
    case 'Active':
      return 'text-green-500';
    case 'Expiring Soon':
      return 'text-orange-500';
    case 'Expired':
      return 'text-red-500';
    default:
      return '';
  }
};

const VehicleDocumentsTable = () => {
  return (
    <div className="w-full bg-[#010101ad] text-[#ccfacf] border-1 rounded-lg p-6">
      <h2 className="text-[26px] font-semibold">Vehicle Documents</h2>
      <span className="text-sm text-[#ffffff6c]">
      Manage vehicle registration, insurance, and other documents
      </span>
      <table className="min-w-full text-white mt-4">
        <thead>
          <tr className='text-left'>
            <th className="px-4 py-2">Document ID</th>
            <th className="px-4 py-2">Vehicle</th>
            <th className="px-4 py-2">Document Type</th>
            <th className="px-4 py-2">Number</th>
            <th className="px-4 py-2">Expiry Date</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc) => (
            <tr key={doc.id} className="border-t hover:bg-[#ffffff0c] font-semibold">
              <td className="px-4 py-4">{doc.id}</td>
              <td className="px-4 py-4">
                {doc.vehicle}
                <br />
                <span className="text-sm text-gray-400">{doc.vehicleId}</span>
              </td>
              <td className="px-4 py-4">{doc.type}</td>
              <td className="px-4 py-4">{doc.number}</td>
              <td className="px-4 py-4">{doc.expiry}</td>
              <td className={`px-4 py-4 ${getStatusClass(doc.status)}`}>
                {doc.status}
              </td>
              <td className="px-4 py-4 text-right">
                <button className="hover:bg-[#ffffff1d] p-2 px-3 rounded-lg cursor-pointer">View</button>
                {doc.status === 'Expired' && (
                  <button className=" border ml-2 border-[#ffffff1d] hover:bg-[#ffffff1d] p-2 px-3 rounded-lg cursor-pointer">
                    Renew
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

export default VehicleDocumentsTable;