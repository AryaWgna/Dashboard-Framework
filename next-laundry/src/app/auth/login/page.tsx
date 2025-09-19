
"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { FiMail, FiLock } from 'react-icons/fi';
import { useAuth } from '../../contexts/AuthContext';

const LoginPage = () => {
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login();
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side with image */}
      <div className="hidden lg:block w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1593113646773-ae18c3975b7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80')" }}>
        <div className="flex items-center justify-center h-full bg-black bg-opacity-60">
          <div className="text-white text-center p-12">
            <h1 className="text-5xl font-bold mb-4">Laundromat Dashboard</h1>
            <p className="text-xl">Manajemen laundry modern di ujung jari Anda.</p>
          </div>
        </div>
      </div>

      {/* Right side with form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <img src="/laundry-logo.svg" alt="Logo" className="w-16 h-16 mx-auto mb-4"/>
            <h2 className="text-3xl font-bold text-gray-800">Selamat Datang Kembali</h2>
            <p className="text-gray-600">Silakan masuk untuk melanjutkan.</p>
          </div>
          
          <form onSubmit={handleLogin}>
            <div className="relative mb-4">
              <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder="Email"
                defaultValue="admin@laundry.com"
                className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition text-gray-800 placeholder-gray-500"
                required
              />
            </div>
            
            <div className="relative mb-6">
              <FiLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                defaultValue="password"
                className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition text-gray-800 placeholder-gray-500"
                required
              />
            </div>
            
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center text-sm text-gray-600">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Ingat saya</span>
              </label>
              <a href="#" className="text-sm text-blue-600 hover:underline">Lupa password?</a>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
