import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const MySkeleton: React.FC = () => {
  return (
    <div className="w-80 bg-gradient-to-b from-gray-800 to-gray-900 text-white shadow-lg rounded-lg">
      {/* Skeleton for the card header */}
      <div className="rounded-t-lg">
        <Skeleton className="h-48 w-full object-cover" />
      </div>

      {/* Skeleton for the card content */}
      <div className="p-4 space-y-2">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-4 w-full" />
      </div>

      {/* Skeleton for the card footer */}
      <div className="p-4">
        <Skeleton className="h-10 w-full rounded-lg" />
      </div>
    </div>
  );
};

export default MySkeleton;
