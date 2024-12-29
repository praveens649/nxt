'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import NavbarFooter from './NavbarFooter';
import MovieDetailsButton from './MovieDetailsButton';
import MySkeleton from './MySkeleton';
import WatchlistButton from './WatchlistButton';
import { Movie } from '../types/Movie'; 


const MovieCard: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);

  
  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const genreFilter = selectedGenre ? `&with_genres=${selectedGenre}` : '';
        // const response = await fetch(
        //   `https://api.themoviedb.org/3/discover/movie?api_key=a8505995474fe0054d70db3369b47cbe${genreFilter}`
        // );
        const data = await response.json();
        setMovies(data.results.slice(0, 16));
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [selectedGenre]);

  
  const toggleWatchlist = (movie: Movie) => {
    const existingWatchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');
    const updatedWatchlist = existingWatchlist.some((m: Movie) => m.id === movie.id)
      ? existingWatchlist.filter((m: Movie) => m.id !== movie.id)
      : [...existingWatchlist, movie];

    localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
  };

  return (
    <div className="flex flex-col items-center p-4">
     
      <NavbarFooter onGenreSelect={setSelectedGenre} />

      <div className="flex flex-wrap justify-center gap-6 mt-6">
        {isLoading
          ? Array.from({ length: 12 }).map((_, index) => <MySkeleton key={index} />)
          : movies.map((movie) => (
              <Card
                key={movie.id}
                className="w-80 bg-gradient-to-b from-gray-800 to-gray-900 text-white shadow-lg rounded-lg hover:scale-105 transition-transform duration-300"
              >
                {/* Card Header */}
                <CardHeader>
                  <img
                    className="h-48 w-full object-cover rounded-t-lg"
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                </CardHeader>

                {/* Card Content */}
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl font-bold">{movie.title}</CardTitle>
                    <div className="flex items-center text-yellow-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 17.27l6.18 3.73-1.64-7.19L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.57L5.82 21z"></path>
                      </svg>
                      <span className="ml-1 text-sm">{movie.vote_average.toFixed(1)}</span>
                    </div>
                  </div>
                  <CardDescription className="mt-2 text-gray-400 text-sm">
                    {movie.overview.length > 100 ? `${movie.overview.slice(0, 100)}...` : movie.overview}
                  </CardDescription>
                </CardContent>

                {/* Card Footer */}
                <CardFooter className="p-4 flex flex-row  justify-between ">
                  <MovieDetailsButton movie={movie} />
                  <WatchlistButton onToggleWatchlist={() => toggleWatchlist(movie)} />
                </CardFooter>
              </Card>
            ))}
      </div>
    </div>
  );
};

export default MovieCard;
