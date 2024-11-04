import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination-container text-center">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        style={{
          backgroundColor: '#28a745',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          margin: '0 15px',
          cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
          opacity: currentPage === 1 ? 0.5 : 1,
        }}
      >
        Previous
      </button>
      
      <span style={{ margin: '0 15px', fontSize: '20px', color: '#000' }}>
        {currentPage} of {totalPages}
      </span>
      
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        style={{
          backgroundColor: '#28a745',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          margin: '0 15px',
          cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
          opacity: currentPage === totalPages ? 0.5 : 1,
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
