"use client";
import React, { useState, useEffect } from 'react';
import { FiDollarSign, FiPackage, FiCheckCircle, FiUsers } from 'react-icons/fi';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import withAuth from '../../components/withAuth';

const DashboardSkeleton = () => (
  <div className="p-6">
    <div className="h-8 bg-gray-200 rounded w-1/3 mb-2 animate-pulse"></div>
    <div className="h-4 bg-gray-200 rounded w-1/2 mb-8 animate-pulse"></div>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="bg-white p-6 rounded-xl shadow-md flex items-center">
          <div className="h-14 w-14 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="ml-4 flex-1">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-1/2 animate-pulse"></div>
          </div>
        </div>
      ))}
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
      <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md">
        <div className="h-6 bg-gray-200 rounded w-1/4 mb-4 animate-pulse"></div>
        <div className="h-80 bg-gray-200 rounded animate-pulse"></div>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="h-6 bg-gray-200 rounded w-1/3 mb-4 animate-pulse"></div>
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="border-l-4 border-gray-200 pl-4">
              <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
              <div className="h-3 bg-gray-200 rounded w-1/4 animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const DashboardPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const summaryData = [
    { title: 'Pendapatan Hari Ini', value: 'Rp 1.500.000', icon: <FiDollarSign size={28} />, color: 'text-green-500', bgColor: 'bg-green-100' },
    { title: 'Total Pesanan', value: '150', icon: <FiPackage size={28} />, color: 'text-blue-500', bgColor: 'bg-blue-100' },
    { title: 'Cucian Selesai', value: '120', icon: <FiCheckCircle size={28} />, color: 'text-indigo-500', bgColor: 'bg-indigo-100' },
    { title: 'Pelanggan Baru', value: '12', icon: <FiUsers size={28} />, color: 'text-yellow-500', bgColor: 'bg-yellow-100' },
  ];

  const chartData = [
    { name: 'Sen', 'Cuci Kering': 40, 'Cuci Komplit': 24, 'Setrika': 12 },
    { name: 'Sel', 'Cuci Kering': 30, 'Cuci Komplit': 13, 'Setrika': 22 },
    { name: 'Rab', 'Cuci Kering': 20, 'Cuci Komplit': 98, 'Setrika': 45 },
    { name: 'Kam', 'Cuci Kering': 27, 'Cuci Komplit': 39, 'Setrika': 34 },
    { name: 'Jum', 'Cuci Kering': 18, 'Cuci Komplit': 48, 'Setrika': 17 },
    { name: 'Sab', 'Cuci Kering': 23, 'Cuci Komplit': 38, 'Setrika': 25 },
    { name: 'Min', 'Cuci Kering': 34, 'Cuci Komplit': 43, 'Setrika': 11 },
  ];

  const recentActivities = [
    { user: 'John Doe', activity: 'membuat pesanan baru #1234', time: '5 menit lalu' },
    { user: 'Jane Smith', activity: 'mengambil cucian #1231', time: '1 jam lalu' },
    { user: 'Admin', activity: 'memperbarui status pesanan #1232', time: '2 jam lalu' },
  ];

  if (loading) {
    return <DashboardSkeleton />;
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-2 text-gray-800">Selamat Datang, John!</h1>
      <p className="text-gray-600 mb-8">Berikut adalah ringkasan bisnis laundry Anda hari ini.</p>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {summaryData.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md flex items-center">
            <div className={`p-4 rounded-full ${item.bgColor} ${item.color}`}>
              {item.icon}
            </div>
            <div className="ml-4">
              <p className="text-gray-500 text-sm">{item.title}</p>
              <p className="text-2xl font-bold text-gray-800">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        {/* Weekly Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md">
          <h3 className="font-bold text-lg mb-4 text-gray-800">Statistik Pesanan Mingguan</h3>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip />
              <Legend />
              <Bar dataKey="Cuci Kering" stackId="a" fill="#3B82F6" />
              <Bar dataKey="Cuci Komplit" stackId="a" fill="#8B5CF6" />
              <Bar dataKey="Setrika" stackId="a" fill="#F59E0B" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Activities */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="font-bold text-lg mb-4 text-gray-800">Aktivitas Terbaru</h3>
          <ul>
            {recentActivities.map((activity, index) => (
              <li key={index} className="border-l-4 border-blue-500 pl-4 mb-4">
                <p className="font-semibold text-gray-800">{activity.user} <span className="font-normal text-gray-600">{activity.activity}</span></p>
                <p className="text-sm text-gray-400">{activity.time}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default withAuth(DashboardPage);
