import React from 'react';
import { FiCalendar, FiDownload, FiDollarSign, FiList, FiUsers } from 'react-icons/fi';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Reports = () => {
  // Dummy data for the chart
  const weeklyData = [
    { day: 'Sen', pendapatan: 400000 },
    { day: 'Sel', pendapatan: 300000 },
    { day: 'Rab', pendapatan: 500000 },
    { day: 'Kam', pendapatan: 450000 },
    { day: 'Jum', pendapatan: 600000 },
    { day: 'Sab', pendapatan: 750000 },
    { day: 'Min', pendapatan: 800000 },
  ];

  // Dummy data for summary cards
  const summaryData = [
    { title: 'Total Pendapatan', value: 'Rp 3.800.000', icon: <FiDollarSign />, color: 'bg-green-100 text-green-600' },
    { title: 'Total Pesanan', value: '124', icon: <FiList />, color: 'bg-blue-100 text-blue-600' },
    { title: 'Pelanggan Baru', value: '15', icon: <FiUsers />, color: 'bg-indigo-100 text-indigo-600' },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Laporan</h2>
        <div className="flex items-center space-x-2">
          <FiCalendar className="text-gray-500" />
          <select className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Mingguan</option>
            <option>Bulanan</option>
            <option>Tahunan</option>
          </select>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
            <FiDownload className="mr-2" />
            Unduh Laporan
          </button>
        </div>
      </div>
      
      {/* Revenue Chart */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-bold mb-4">Grafik Pendapatan Mingguan</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis tickFormatter={(value) => `Rp ${value/1000}k`} />
              <Tooltip formatter={(value) => [`Rp ${value.toLocaleString('id-ID')}`, 'Pendapatan']} />
              <Legend />
              <Bar dataKey="pendapatan" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Report Summary */}
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Ringkasan Laporan</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {summaryData.map(item => (
            <div key={item.title} className="bg-white p-6 rounded-xl shadow-md flex items-center">
              <div className={`text-3xl p-4 rounded-full mr-4 ${item.color}`}>
                {item.icon}
              </div>
              <div>
                <p className="text-gray-500 font-medium">{item.title}</p>
                <p className="text-2xl font-bold text-gray-800">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Reports;
