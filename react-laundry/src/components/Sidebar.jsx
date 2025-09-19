import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FiGrid, FiList, FiCheckSquare, FiFileText, FiSettings, FiDroplet, FiChevronLeft, FiChevronRight, FiLogOut } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navLinks = [
    { name: 'Dashboard', path: '/', icon: <FiGrid /> },
    { name: 'Pesanan', path: '/orders', icon: <FiList /> },
    { name: 'Status Cucian', path: '/status', icon: <FiCheckSquare /> },
    { name: 'Laporan', path: '/reports', icon: <FiFileText /> },
    { name: 'Pengaturan', path: '/settings', icon: <FiSettings /> },
  ];

  return (
    <motion.aside 
      animate={{ width: isCollapsed ? '5rem' : '16rem' }}
      transition={{ duration: 0.3 }}
      className="bg-gray-900 text-gray-300 h-screen p-4 flex flex-col relative"
    >
      <button 
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-8 bg-blue-600 hover:bg-blue-700 text-white p-1 rounded-full z-20 transition-transform duration-300"
      >
        {isCollapsed ? <FiChevronRight /> : <FiChevronLeft />}
      </button>

      <div className="flex items-center mb-8 overflow-hidden">
        <FiDroplet className="text-3xl text-blue-500 mr-2 flex-shrink-0" />
        <AnimatePresence>
          {!isCollapsed && (
            <motion.h1 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-2xl font-bold text-white whitespace-nowrap"
            >
              LaundryKu
            </motion.h1>
          )}
        </AnimatePresence>
      </div>
      
      <nav className="flex-grow">
        <ul>
          {navLinks.map((link) => (
            <li key={link.name} className="mb-2">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center p-3 rounded-lg hover:bg-gray-700 transition-colors ${isActive ? 'bg-blue-600 text-white' : ''}`
                }
              >
                <span className={`mr-3 text-lg ${isCollapsed ? 'mx-auto' : ''}`}>{link.icon}</span>
                <AnimatePresence>
                  {!isCollapsed && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="whitespace-nowrap"
                    >
                      {link.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="mt-auto">
        <button
          onClick={handleLogout}
          className="flex items-center p-3 w-full rounded-lg hover:bg-red-500 hover:text-white transition-colors"
        >
          <span className={`mr-3 text-lg ${isCollapsed ? 'mx-auto' : ''}`}><FiLogOut /></span>
          <AnimatePresence>
            {!isCollapsed && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="whitespace-nowrap"
              >
                Keluar
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
