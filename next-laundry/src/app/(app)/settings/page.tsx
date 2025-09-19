
"use client";
import React, { useState } from 'react';
import { FiUser, FiMapPin, FiPhone, FiCreditCard, FiBell } from 'react-icons/fi';
import withAuth from '../../components/withAuth';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Pengaturan</h1>
      
      <div className="flex">
        {/* Settings Navigation */}
        <nav className="w-1/4">
          <ul>
            <li className="mb-2">
              <button
                onClick={() => setActiveTab('profile')}
                className={`w-full text-left p-3 rounded-lg flex items-center ${activeTab === 'profile' ? 'bg-blue-600 text-white' : 'hover:bg-gray-100 text-gray-800'}`}
              >
                <FiUser className="mr-3" /> Profil & Keamanan
              </button>
            </li>
            <li className="mb-2">
              <button
                onClick={() => setActiveTab('laundry')}
                className={`w-full text-left p-3 rounded-lg flex items-center ${activeTab === 'laundry' ? 'bg-blue-600 text-white' : 'hover:bg-gray-100 text-gray-800'}`}
              >
                <FiMapPin className="mr-3" /> Informasi Laundry
              </button>
            </li>
            <li className="mb-2">
              <button
                onClick={() => setActiveTab('notifications')}
                className={`w-full text-left p-3 rounded-lg flex items-center ${activeTab === 'notifications' ? 'bg-blue-600 text-white' : 'hover:bg-gray-100 text-gray-800'}`}
              >
                <FiBell className="mr-3" /> Notifikasi
              </button>
            </li>
          </ul>
        </nav>

        {/* Settings Content */}
        <div className="w-3/4 bg-white rounded-xl shadow-md ml-6 p-8">
          {activeTab === 'profile' && <ProfileSettings />}
          {activeTab === 'laundry' && <LaundrySettings />}
          {activeTab === 'notifications' && <NotificationSettings />}
        </div>
      </div>
    </div>
  );
};

// Sub-components for each settings tab
const ProfileSettings = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4 text-gray-800">Profil & Keamanan</h2>
    <form className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
        <input type="text" defaultValue="John Doe" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900"/>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Alamat Email</label>
        <input type="email" defaultValue="john.doe@example.com" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900"/>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Kata Sandi Saat Ini</label>
        <input type="password" placeholder="••••••••" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500 text-gray-900"/>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Kata Sandi Baru</label>
        <input type="password" placeholder="••••••••" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500 text-gray-900"/>
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Simpan Perubahan</button>
    </form>
  </div>
);

const LaundrySettings = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4 text-gray-800">Informasi Laundry</h2>
    <form className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Nama Laundry</label>
        <input type="text" defaultValue="Laundromat Modern" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900"/>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Alamat</label>
        <input type="text" defaultValue="Jl. Jendral Sudirman No. 123, Jakarta" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900"/>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Nomor Telepon</label>
        <input type="tel" defaultValue="0812-3456-7890" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900"/>
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Simpan Perubahan</button>
    </form>
  </div>
);

const NotificationSettings = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4 text-gray-800">Notifikasi</h2>
    <div className="space-y-4">
      <div className="flex items-center justify-between p-4 border rounded-lg">
        <div>
          <h3 className="font-medium text-gray-800">Notifikasi Email</h3>
          <p className="text-sm text-gray-500">Terima email saat pesanan selesai atau ada pembaruan penting.</p>
        </div>
        <label className="switch">
          <input type="checkbox" defaultChecked/>
          <span className="slider round"></span>
        </label>
      </div>
      <div className="flex items-center justify-between p-4 border rounded-lg">
        <div>
          <h3 className="font-medium text-gray-800">Notifikasi SMS</h3>
          <p className="text-sm text-gray-500">Dapatkan SMS saat cucian Anda siap diambil.</p>
        </div>
        <label className="switch">
          <input type="checkbox"/>
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  </div>
);

export default withAuth(SettingsPage);
