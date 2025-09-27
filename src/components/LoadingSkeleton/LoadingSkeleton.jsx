import React from 'react';

const LoadingSkeleton = ({ className = "w-full h-48 bg-gray-200 animate-pulse rounded" }) => {
  return (
    <div className={className}>
      <div className="flex items-center justify-center h-full">
        <div className="text-gray-400 text-sm">Loading...</div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
