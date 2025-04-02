import React from 'react'

const rentals = [
  {
    customer: 'Rahul Sharma',
    email: 'rahul@example.com',
    vehicle: 'KA-01-AB-1234 (Honda City)',
    duration: '3/1/2023 - 3/8/2023',
    status: 'active',
  },
  {
    customer: 'Priya Patel',
    email: 'priya@example.com',
    vehicle: 'KA-01-CD-5678 (Hyundai Creta)',
    duration: '3/2/2023 - 3/5/2023',
    status: 'active',
  },
  {
    customer: 'Amit Kumar',
    email: 'amit@example.com',
    vehicle: 'KA-01-EF-9012 (Maruti Swift)',
    duration: '2/25/2023 - 3/4/2023',
    status: 'completed',
  },
  {
    customer: 'Sneha Reddy',
    email: 'sneha@example.com',
    vehicle: 'KA-01-GH-3456 (Toyota Innova)',
    duration: '2/28/2023 - 3/7/2023',
    status: 'active',
  },
];

const RecentRental = () => {
  return (
    <div className=" text-white">
      <table className="">
        <thead>
          <tr>
            <th className="py-2 px-4 text-left">Customer</th>
            <th className="py-2 px-4 text-left">Vehicle</th>
            <th className="py-2 px-4 text-left">Duration</th>
            <th className="py-2 px-4 text-left">Status</th>
            <th className="py-2 px-4 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {rentals.map((rental, index) => (
            <tr key={index} className="border-t">
              <td className="py-4 px-4">
                <div className='flex items-center gap-3'>
                <div className='h-10 w-10 rounded-full bg-amber-50'></div>
                <div>
                 {rental.customer}
                <br />
                <small className="text-gray-400">{rental.email}</small>
                </div>
                </div>
                
              </td>
              <td className="py-4 px-4">{rental.vehicle}</td>
              <td className="py-4 px-4">{rental.duration}</td>
              <td className="py-4 px-4">
                <span
                  className={`inline-block px-2 py-1 text-[13px] rounded-full ${
                    rental.status === 'active' ? 'bg-white text-black' : 'bg-[#ffffff20]'
                  }`}
                >
                  {rental.status}
                </span>
              </td>
              <td className="py-4 px-4">
                <button className="hover:bg-[#ffffff1d] p-2 px-3 rounded-lg">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RecentRental