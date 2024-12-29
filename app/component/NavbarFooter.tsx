import { Button } from '@/components/ui/button';
import React from 'react';

// Props for handling genre selection
interface NavbarFooterProps {
  onGenreSelect: (genreId: number) => void;
}

const NavbarFooter: React.FC<NavbarFooterProps> = ({ onGenreSelect }) => {
  return (
    <div className="bg-gray-950 text-white py-4">
      <nav className="flex justify-center space-x-8">
        <Button
          onClick={() => onGenreSelect(878)} // Science Fiction genre ID
          className="text-lg font-semibold text-gray-300 hover:text-red-600 transition duration-300"
        >
          Science Fiction
        </Button>
        <Button
          onClick={() => onGenreSelect(28)} // Action genre ID
          className="text-lg font-semibold text-gray-300 hover:text-red-600 transition duration-300"
        >
          Action
        </Button>
        <Button
          onClick={() => onGenreSelect(9648)} // Mystery genre ID
          className="text-lg font-semibold text-gray-300 hover:text-red-600 transition duration-300"
        >
          Mystery
        </Button>
        <Button
          onClick={() => onGenreSelect(16)} // Animation genre ID
          className="text-lg font-semibold text-gray-300 hover:text-red-600 transition duration-300"
        >
          Animation
        </Button>
      </nav>
    </div>
  );
};

export default NavbarFooter;
