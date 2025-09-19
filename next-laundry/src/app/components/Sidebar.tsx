
"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiGrid, FiList, FiCheckSquare, FiBarChart2, FiSettings, FiLogOut } from 'react-icons/fi';
import { useAuth } from '../contexts/AuthContext';

const Sidebar = () => {
  const pathname = usePathname();
  const { logout } = useAuth();

  const navItems = [
    { href: '/dashboard', icon: <FiGrid className="mr-3" />, label: 'Dashboard' },
    { href: '/orders', icon: <FiList className="mr-3" />, label: 'Pesanan' },
    { href: '/status', icon: <FiCheckSquare className="mr-3" />, label: 'Status Cucian' },
    { href: '/reports', icon: <FiBarChart2 className="mr-3" />, label: 'Laporan' },
    { href: '/settings', icon: <FiSettings className="mr-3" />, label: 'Pengaturan' },
  ];

  return (
    <aside className="bg-white text-gray-800 w-64 min-h-screen p-4 shadow-lg">
      <div className="flex items-center mb-8">
        <img src="/laundry-logo.svg" alt="Laundry Logo" className="h-10 w-10 mr-2" />
        <h1 className="text-2xl font-bold text-blue-600">Laundromat</h1>
      </div>
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.href} className="mb-2">
              <Link
                href={item.href}
                className={`flex items-center p-3 rounded-lg transition-colors ${
                  pathname === item.href
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'hover:bg-gray-100'
                }`}
              >
                {item.icon}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="absolute bottom-4 left-4 w-56">
        <button
          onClick={logout}
          className="w-full flex items-center p-3 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors"
        >
          <FiLogOut className="mr-3" />
          Logout
        </button>
        <p className="text-center text-xs text-gray-400 mt-4">&copy; 2025 Laundromat</p>
      </div>
    </aside>
  );
};

export default Sidebar;
