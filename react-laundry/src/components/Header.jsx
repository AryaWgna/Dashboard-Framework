import React, { useState, useRef, useEffect } from 'react';
import { FiUser, FiBell, FiChevronDown, FiLogOut, FiSettings, FiShoppingCart, FiCheckCircle, FiSearch } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [notificationDropdownOpen, setNotificationDropdownOpen] = useState(false);
  
  const userDropdownRef = useRef(null);
  const notificationDropdownRef = useRef(null);

  // Dummy notifications
  const notifications = [
    { id: 1, icon: <FiShoppingCart className="text-blue-500" />, text: 'Pesanan baru #123 masuk', time: '5 menit lalu' },
    { id: 2, icon: <FiCheckCircle className="text-green-500" />, text: 'Pesanan #121 selesai', time: '1 jam lalu' },
    { id: 3, icon: <FiShoppingCart className="text-blue-500" />, text: 'Pesanan baru #124 masuk', time: 'kemarin' },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
        setUserDropdownOpen(false);
      }
      if (notificationDropdownRef.current && !notificationDropdownRef.current.contains(event.target)) {
        setNotificationDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center z-10">
      {/* Global Search Bar */}
      <div className="relative flex-1 max-w-xs">
        <input 
          type="text"
          placeholder="Cari pesanan atau pelanggan..."
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
      </div>

      <div className="flex items-center space-x-4">

        {/* Notification Bell */}
        <div className="relative" ref={notificationDropdownRef}>
          <button 
            onClick={() => setNotificationDropdownOpen(!notificationDropdownOpen)}
            className="relative hover:bg-gray-100 p-2 rounded-full"
          >
            <FiBell className="text-gray-600 h-6 w-6" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>

          <AnimatePresence>
            {notificationDropdownOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg z-20"
              >
                <div className="p-4 font-bold border-b">Notifikasi</div>
                <div className="py-1">
                  {notifications.map(notif => (
                    <div key={notif.id} className="flex items-start px-4 py-3 text-sm text-gray-700 hover:bg-gray-100">
                      <div className="pt-1">{notif.icon}</div>
                      <div className="ml-3">
                        <p>{notif.text}</p>
                        <p className="text-xs text-gray-400">{notif.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center p-2 border-t text-sm text-blue-600 hover:bg-gray-50">
                  <a href="#">Lihat semua notifikasi</a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* User Profile Dropdown */}
        <div className="relative" ref={userDropdownRef}>
          <div 
            className="flex items-center space-x-2 cursor-pointer p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setUserDropdownOpen(!userDropdownOpen)}
          >
            <FiUser className="text-gray-600 h-8 w-8 rounded-full" />
            <div className="text-sm hidden md:block">
              <p className="font-semibold">Admin</p>
              <p className="text-gray-500">Super User</p>
            </div>
            <FiChevronDown className={`text-gray-500 transition-transform ${userDropdownOpen ? 'rotate-180' : ''}`} />
          </div>

          <AnimatePresence>
            {userDropdownOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20"
              >
                <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <FiSettings className="mr-2" /> Pengaturan
                </a>
                <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <FiLogOut className="mr-2" /> Keluar
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default Header;
