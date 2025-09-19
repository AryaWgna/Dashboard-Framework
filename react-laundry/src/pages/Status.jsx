import React from 'react';
import { FiLoader, FiCheck, FiTruck, FiArchive } from 'react-icons/fi';

const Status = () => {

  const laundryStatus = [
    { id: 1, customer: 'John Doe', status: 'Pencucian', icon: <FiLoader className="text-blue-500" />, progress: 25 },
    { id: 2, customer: 'Jane Smith', status: 'Pengeringan', icon: <FiCheck className="text-yellow-500" />, progress: 50 },
    { id: 3, customer: 'Peter Jones', status: 'Setrika', icon: <FiTruck className="text-orange-500" />, progress: 75 },
    { id: 4, customer: 'Mary Jane', status: 'Siap Diambil', icon: <FiArchive className="text-green-500" />, progress: 100 },
    { id: 5, customer: 'Chris Green', status: 'Pencucian', icon: <FiLoader className="text-blue-500" />, progress: 25 },
  ];

  const ProgressBar = ({ progress }) => (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
    </div>
  );

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Status Cucian Langsung</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {laundryStatus.map(item => (
          <div key={item.id} className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-bold text-lg text-gray-800">#{item.id} - {item.customer}</p>
                <p className="text-sm text-gray-500">{item.status}</p>
              </div>
              <div className="text-3xl">{item.icon}</div>
            </div>
            <div className="mt-4">
              <ProgressBar progress={item.progress} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Status;
