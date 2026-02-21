import React from 'react';

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-gray-200 rounded-full"></div>
        <div className="w-16 h-16 border-4 border-blue-500 rounded-full animate-spin absolute top-0 left-0 border-t-transparent"></div>
      </div>
      <p className="mt-4 text-gray-600">Loading todos...</p>
    </div>
  );
};

export default Loader;