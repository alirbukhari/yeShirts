import React from 'react';

const Loader = () => {
  return (
    <div className='h-screen flex justify-center items-center' style={{ background: 'radial-gradient(#fff, #ffd6d6)' }}>
      <svg className='animate-ping hover:text-red-800 h-12 w-12 text-red-600' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10' />
      </svg>
    </div>
  );
};

export default Loader;
