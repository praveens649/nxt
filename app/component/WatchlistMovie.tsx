'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Movie } from '../types/Movie'; // Movie type
import { Skeleton } from '@/components/ui/skeleton'; // Import the ShadCN Skeleton component

const WatchlistPage: React.FC = () => {
  const [watchlist, setWatchlist] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true); // Loading state

  useEffect(() => {
    setIsLoading(true); // Start loading
    setTimeout(() => {
      const storedWatchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');
      setWatchlist(storedWatchlist);
      setIsLoading(false); // Stop loading after data is fetched
    }, 1000); // Simulate loading time
  }, []);

  const removeFromWatchlist = (movieId: number) => {
    const updatedWatchlist = watchlist.filter((movie) => movie.id !== movieId);
    setWatchlist(updatedWatchlist);
    localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist)); // Persist changes in localStorage
  };

  return (
    <div className="p-6 bg-gray-950 text-white min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center">My Watchlist</h2>
      {isLoading ? (
        // Skeleton Loader
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-950">
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="space-y-4">
              <Skeleton className="w-40 h-60 mx-auto rounded-md" />
              <Skeleton className="h-6 w-3/4 mx-auto rounded" />
              <Skeleton className="h-4 w-5/6 mx-auto rounded" />
            </div>
          ))}
        </div>
      ) : watchlist.length === 0 ? (
        <p className="text-center text-gray-300">No movies in your watchlist yet.</p>
      ) : (
        <div className="overflow-x-auto bg-gray-950">
          <table className="w-full table-auto border-collapse bg-gray-700 text-left shadow-lg rounded-lg">
            <thead>
              <tr className="bg-gray-900 text-gray-300 uppercase text-sm leading-normal">
                <th className="p-3">Thumbnail</th>
                <th className="p-3">Title</th>
                <th className="p-3">Overview</th>
                <th className="p-3">Rating</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {watchlist.map((movie) => (
                <tr
                  key={movie.id}
                  className="border-b border-gray-600 hover:bg-gray-700 transition-all duration-300"
                >
                  {/* Thumbnail */}
                  <td className="p-3">
                    <img
                      src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                      alt={movie.title}
                      className="w-16 h-24 object-cover rounded-md shadow-sm"
                    />
                  </td>

                  {/* Title */}
                  <td className="p-3 font-medium">{movie.title}</td>

                  {/* Overview */}
                  <td className="p-3 text-sm text-gray-300">
                    {movie.overview.length > 100
                      ? `${movie.overview.slice(0, 100)}...`
                      : movie.overview}
                  </td>

                  {/* Rating */}
                  <td className="p-3 text-yellow-400 font-semibold">
                    {movie.vote_average.toFixed(1)}
                  </td>

                  {/* Actions */}
                  <td className="p-3">
                    <Button
                      onClick={() => removeFromWatchlist(movie.id)}
                      className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded-md"
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default WatchlistPage;
