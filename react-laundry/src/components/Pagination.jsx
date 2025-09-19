import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [...Array(totalPages).keys()].map(num => num + 1);

  return (
    <div className="flex justify-center items-center space-x-2 mt-4">
      <button 
        onClick={() => onPageChange(currentPage - 1)} 
        disabled={currentPage === 1}
        className="p-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
      >
        <FiChevronLeft />
      </button>

      {pages.map(page => (
        <button 
          key={page} 
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded-md text-sm ${currentPage === page ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'}`}
        >
          {page}
        </button>
      ))}

      <button 
        onClick={() => onPageChange(currentPage + 1)} 
        disabled={currentPage === totalPages}
        className="p-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
      >
        <FiChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
