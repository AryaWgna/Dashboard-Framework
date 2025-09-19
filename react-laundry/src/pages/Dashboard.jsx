import React, { useState, useEffect } from 'react';
import { FiDollarSign, FiCheckCircle, FiRefreshCw, FiUsers } from 'react-icons/fi';
import { orders } from '../data/orders';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, Sector } from 'recharts';


// --- Skeleton Components (no changes) ---
const StatCardSkeleton = () => (
  <div className="bg-white p-6 rounded-xl shadow-md flex items-center justify-between animate-pulse">
    <div className="w-16 h-16 rounded-full bg-gray-200"></div>
    <div className="flex-1 ml-4">
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div className="h-8 bg-gray-200 rounded w-1/2"></div>
    </div>
  </div>
);

const RecentOrdersSkeleton = () => (
  <div className="bg-white shadow-md rounded-xl mt-8">
    <div className="p-4 border-b border-gray-200">
      <div className="h-6 bg-gray-200 rounded w-1/3"></div>
    </div>
    <table className="min-w-full table-auto">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 h-4 bg-gray-200 rounded"></th>
          <th className="px-6 py-3 h-4 bg-gray-200 rounded"></th>
          <th className="px-6 py-3 h-4 bg-gray-200 rounded"></th>
          <th className="px-6 py-3 h-4 bg-gray-200 rounded"></th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {[...Array(5)].map((_, i) => (
          <tr key={i}>
            <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded"></div></td>
            <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded"></div></td>
            <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded"></div></td>
            <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded"></div></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const ChartSkeleton = ({ className }) => (
  <div className={`bg-white p-6 rounded-xl shadow-md animate-pulse ${className}`}>
    <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
    <div className="h-64 bg-gray-200 rounded"></div>
  </div>
);


// --- Data & Main Component ---
const StatCard = ({ icon, title, value, color }) => (
  <div className="bg-white p-6 rounded-xl shadow-md flex items-center justify-between">
    <div className={`text-4xl p-4 rounded-full ${color}`}>
      {icon}
    </div>
    <div>
      <p className="text-gray-500 text-sm font-medium">{title}</p>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
  </div>
);

// --- New Dummy Data for Charts ---
const weeklyRevenueData = [
  { day: 'Sen', pendapatan: 400000 },
  { day: 'Sel', pendapatan: 300000 },
  { day: 'Rab', pendapatan: 500000 },
  { day: 'Kam', pendapatan: 450000 },
  { day: 'Jum', pendapatan: 600000 },
  { day: 'Sab', pendapatan: 750000 },
  { day: 'Min', pendapatan: 800000 },
];

const packageData = [
  { name: 'Cuci Setrika', value: 400 },
  { name: 'Cuci Kering', value: 300 },
  { name: 'Setrika Saja', value: 200 },
];
const COLORS = ['#3b82f6', '#10b981', '#f59e0b'];


const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Simulate a 1.5 second loading time
    return () => clearTimeout(timer);
  }, []);

  const recentOrders = orders.slice(0, 5);

  if (loading) {
    return (
      <div>
        <div className="h-8 bg-gray-200 rounded w-1/4 mb-6 animate-pulse"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => <StatCardSkeleton key={i} />)}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <ChartSkeleton className="lg:col-span-2" />
          <ChartSkeleton />
        </div>
        <RecentOrdersSkeleton />
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Dashboard</h2>
      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          icon={<FiDollarSign />} 
          title="Pendapatan Hari Ini" 
          value="Rp 1.250.000"
          color="bg-green-100 text-green-600"
        />
        <StatCard 
          icon={<FiCheckCircle />} 
          title="Pesanan Selesai" 
          value="32"
          color="bg-blue-100 text-blue-600"
        />
        <StatCard 
          icon={<FiRefreshCw />} 
          title="Pesanan Diproses" 
          value="12"
          color="bg-yellow-100 text-yellow-600"
        />
        <StatCard 
          icon={<FiUsers />} 
          title="Pelanggan Baru" 
          value="5"
          color="bg-indigo-100 text-indigo-600"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        {/* Revenue Line Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold mb-4">Tren Pendapatan Mingguan</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weeklyRevenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis tickFormatter={(value) => `Rp${value / 1000}k`} />
                <Tooltip formatter={(value) => `Rp${value.toLocaleString('id-ID')}`} />
                <Legend />
                <Line type="monotone" dataKey="pendapatan" stroke="#3b82f6" strokeWidth={2} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        {/* Package Pie Chart */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold mb-4">Jenis Layanan</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={packageData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#8884d8" paddingAngle={5}>
                  {packageData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                </Pie>
                <Tooltip formatter={(value) => `${value} pesanan`} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Pesanan Terbaru</h3>
        <div className="bg-white shadow-md rounded-xl">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pelanggan</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Harga</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentOrders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{order.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      order.status === 'Selesai' ? 'bg-green-100 text-green-800' : 
                      order.status === 'Proses' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Rp {order.price.toLocaleString('id-ID')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
