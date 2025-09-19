
"use client";
import React, { useState } from 'react';
import { FiPlus, FiSearch, FiPrinter, FiEdit, FiTrash2 } from 'react-icons/fi';
import Modal from '../../components/Modal';
import withAuth from '../../components/withAuth';

// Define the Order type
interface Order {
  id: string;
  customer: string;
  service: string;
  date: string;
  price: string;
  status: string;
}

const OrdersPage = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [dummyOrders, setDummyOrders] = useState<Order[]>([
    { id: 'ORD001', customer: 'John Doe', service: 'Cuci Kering', date: '2025-09-19', price: 'Rp 50.000', status: 'Selesai' },
    { id: 'ORD002', customer: 'Jane Smith', service: 'Setrika', date: '2025-09-19', price: 'Rp 25.000', status: 'Proses' },
    { id: 'ORD003', customer: 'Peter Jones', service: 'Cuci Komplit', date: '2025-09-18', price: 'Rp 75.000', status: 'Diambil' },
    { id: 'ORD004', customer: 'Mary Jane', service: 'Cuci Kering', date: '2025-09-18', price: 'Rp 55.000', status: 'Selesai' },
    { id: 'ORD005', customer: 'Chris Evans', service: 'Setrika', date: '2025-09-17', price: 'Rp 30.000', status: 'Diambil' },
  ]);

  const handleCreateOrder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Pesanan baru telah ditambahkan (simulasi)!');
    setIsCreateModalOpen(false);
  };

  const handleEditOrder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Pesanan ${selectedOrder?.id} telah diperbarui (simulasi)!`);
    setIsEditModalOpen(false);
  };

  const handleDeleteOrder = (orderId: string) => {
    if (window.confirm(`Apakah Anda yakin ingin menghapus pesanan ${orderId}?`)) {
      alert(`Pesanan ${orderId} telah dihapus (simulasi)!`);
    }
  };
  
  const openEditModal = (order: Order) => {
    setSelectedOrder(order);
    setIsEditModalOpen(true);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Selesai':
        return 'bg-green-100 text-green-800';
      case 'Proses':
        return 'bg-yellow-100 text-yellow-800';
      case 'Diambil':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Daftar Pesanan</h1>
        <button onClick={() => setIsCreateModalOpen(true)} className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 flex items-center">
          <FiPlus className="mr-2" />
          Buat Pesanan Baru
        </button>
      </div>

      <div className="bg-white shadow-md rounded-xl p-6">
        {/* Header with Search and Actions */}
        <div className="flex justify-between items-center mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Cari pesanan..."
              className="bg-gray-100 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-64 text-gray-900 placeholder-gray-500"
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <button className="text-gray-600 hover:text-gray-800 flex items-center">
            <FiPrinter className="mr-2" />
            Cetak Laporan
          </button>
        </div>

        {/* Orders Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left font-semibold p-3 text-gray-600">ID Pesanan</th>
                <th className="text-left font-semibold p-3 text-gray-600">Pelanggan</th>
                <th className="text-left font-semibold p-3 text-gray-600">Tanggal</th>
                <th className="text-left font-semibold p-3 text-gray-600">Layanan</th>
                <th className="text-left font-semibold p-3 text-gray-600">Harga</th>
                <th className="text-center font-semibold p-3 text-gray-600">Status</th>
                <th className="text-center font-semibold p-3 text-gray-600">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dummyOrders.map((order) => (
                <tr key={order.id} className="border-b hover:bg-gray-50">
                  <td className="p-3 font-medium text-blue-600">{order.id}</td>
                  <td className="p-3 text-gray-800">{order.customer}</td>
                  <td className="p-3 text-gray-600">{order.date}</td>
                  <td className="p-3 text-gray-800">{order.service}</td>
                  <td className="p-3 text-gray-800">{order.price}</td>
                  <td className="p-3 text-center">
                    <span className={`px-3 py-1 rounded-full font-semibold text-xs ${getStatusBadge(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="p-3 text-center">
                    <div className="flex justify-center items-center gap-2">
                      <button onClick={() => openEditModal(order)} className="text-blue-500 hover:text-blue-700"><FiEdit /></button>
                      <button onClick={() => handleDeleteOrder(order.id)} className="text-red-500 hover:text-red-700"><FiTrash2 /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Create Order Modal */}
      <Modal isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} title="Buat Pesanan Baru">
        <form onSubmit={handleCreateOrder}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nama Pelanggan</label>
              <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500"/>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Layanan</label>
              <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900">
                <option>Cuci Kering</option>
                <option>Cuci Komplit</option>
                <option>Setrika</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Harga (Rp)</label>
              <input type="number" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500"/>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button type="button" onClick={() => setIsCreateModalOpen(false)} className="mr-2 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">Batal</button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Simpan</button>
          </div>
        </form>
      </Modal>

      {/* Edit Order Modal */}
      {selectedOrder && (
        <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} title={`Edit Pesanan ${selectedOrder.id}`}>
          <form onSubmit={handleEditOrder}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Nama Pelanggan</label>
                <input type="text" defaultValue={selectedOrder.customer} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray-900"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Layanan</label>
                <select defaultValue={selectedOrder.service} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900">
                  <option>Cuci Kering</option>
                  <option>Cuci Komplit</option>
                  <option>Setrika</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Harga (Rp)</label>
                <input type="number" defaultValue={parseInt(selectedOrder.price.replace(/[^0-9]/g, ''))} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900"/>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button type="button" onClick={() => setIsEditModalOpen(false)} className="mr-2 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg">Batal</button>
              <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg">Simpan</button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default withAuth(OrdersPage);
