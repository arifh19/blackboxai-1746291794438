import React from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <div className="pagination flex justify-center my-4">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i + 1}
          onClick={() => onPageChange(i + 1)}
          disabled={currentPage === i + 1}
          className={`px-3 py-1 m-1 border rounded ${currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-white text-black'}`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
