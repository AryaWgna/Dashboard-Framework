
"use client";
import React, { useState } from 'react';
import { FiSearch, FiBell, FiChevronDown, FiUser } from 'react-icons/fi';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const notifications = [
    { text: 'Pesanan #1234 telah selesai.', time: '5 menit lalu' },
    { text: 'Anda memiliki 1 pesanan baru.', time: '1 jam lalu' },
    { text: 'Selamat datang di Laundromat!', time: 'Kemarin' },
  ];

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search transactions..."
            className="bg-gray-100 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-64 placeholder-gray-500 text-gray-800"
          />
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        {/* Profile and Notifications */}
        <div className="flex items-center">
          <div className="relative">
            <button 
              onClick={() => setNotificationsOpen(!notificationsOpen)}
              className="relative mr-6 text-gray-600 hover:text-gray-800"
            >
              <FiBell size={24} />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            {notificationsOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg py-1 z-10">
                <div className="px-4 py-2 font-bold text-gray-800">Notifikasi</div>
                <ul>
                  {notifications.map((n, i) => (
                    <li key={i} className="border-t">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <p>{n.text}</p>
                        <p className="text-xs text-gray-400">{n.time}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center focus:outline-none"
            >
              <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                <FiUser className="text-gray-600" size={24} />
              </div>
              <div className="ml-3 hidden sm:block">
                <p className="font-semibold text-sm text-gray-800">John Doe</p>
                <p className="text-gray-500 text-xs">Admin</p>
              </div>
              <FiChevronDown className="ml-2 text-gray-500" />
            </button>
            
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                <a href="/auth/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
