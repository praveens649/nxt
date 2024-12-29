import Link from 'next/link'
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-6 mt-10">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm mb-2">&copy; {new Date().getFullYear()} Flimfy. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <Link href="/About" className="text-gray-400 hover:text-white">About</Link>
          <Link href="/" className="text-gray-400 hover:text-white">Contact</Link>
          <Link href="/" className="text-gray-400 hover:text-white">Privacy Policy</Link>
          <Link href="/" className="text-gray-400 hover:text-white">Terms of Service</Link>
        </div>
        <div className="mt-4">
          <p className="text-xs text-gray-400">Flimfy is a platform dedicated to helping you discover the best movies and organize your watchlist.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
