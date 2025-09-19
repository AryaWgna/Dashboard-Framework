
"use client";
import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { FaTshirt, FaCheck, FaBoxOpen } from 'react-icons/fa';
import withAuth from '../../components/withAuth';

const StatusPage = () => {
  const dummyStatus = [
    { id: 'ORD001', customer: 'John Doe', status: 'Selesai', progress: 100 },
    { id: 'ORD002', customer: 'Jane Smith', status: 'Proses', progress: 60 },
    { id: 'ORD003', customer: 'Peter Jones', status: 'Diambil', progress: 100 },
    { id: 'ORD004', customer: 'Mary Jane', status: 'Selesai', progress: 100 },
    { id: 'ORD005', customer: 'Chris Evans', status: 'Proses', progress: 30 },
  ];

  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'Selesai':
        return { badge: 'bg-green-100 text-green-800', icon: <FaCheck />, progressBg: 'bg-green-500' };
      case 'Proses':
        return { badge: 'bg-yellow-100 text-yellow-800', icon: <FaTshirt />, progressBg: 'bg-yellow-500' };
      case 'Diambil':
        return { badge: 'bg-blue-100 text-blue-800', icon: <FaBoxOpen />, progressBg: 'bg-blue-500' };
      default:
        return { badge: 'bg-gray-100 text-gray-800', icon: null, progressBg: 'bg-gray-500' };
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Status Cucian</h1>

      <div className="bg-white shadow-md rounded-xl p-6">
        <div className="flex justify-end items-center mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Cari ID pesanan..."
              className="bg-gray-100 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-64 text-gray-900 placeholder-gray-500"
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left font-semibold p-3 text-gray-600">ID Pesanan</th>
                <th className="text-left font-semibold p-3 text-gray-600">Pelanggan</th>
                <th className="text-center font-semibold p-3 text-gray-600">Status</th>
                <th className="text-left font-semibold p-3 text-gray-600">Progress</th>
              </tr>
            </thead>
            <tbody>
              {dummyStatus.map((item) => {
                const statusInfo = getStatusInfo(item.status);
                return (
                  <tr key={item.id} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-medium text-blue-600">{item.id}</td>
                    <td className="p-3 text-gray-800">{item.customer}</td>
                    <td className="p-3 text-center">
                      <span className={`px-3 py-1 rounded-full font-semibold text-xs inline-flex items-center gap-1 ${statusInfo.badge}`}>
                        {statusInfo.icon}
                        {item.status}
                      </span>
                    </td>
                    <td className="p-3">
                      <div className="flex items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div
                            className={`h-2.5 rounded-full ${statusInfo.progressBg}`}
                            style={{ width: `${item.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-xs font-semibold ml-3 text-gray-800">{item.progress}%</span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default withAuth(StatusPage);
