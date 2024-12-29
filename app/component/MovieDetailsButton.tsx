import { useState } from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  vote_average: number;
  release_date: string;
}

interface MovieDetailsButtonProps {
  movie: Movie;
}

const MovieDetailsButton: React.FC<MovieDetailsButtonProps> = ({ movie }) => {
  const [open, setOpen] = useState(false); // State to control the dialog

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* Button to trigger the dialog */}
      <DialogTrigger asChild>
        <Button className="p-4 w-32 rounded-md bg-black hover:bg-gray-700 focus:ring-2 focus:ring-red-400 focus:outline-none">
          View Details
        </Button>
      </DialogTrigger>

      {/* Dialog Content */}
      <DialogContent className="bg-gray-800 text-white max-w-lg rounded-lg shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">{movie.title}</DialogTitle>
          <DialogDescription className="text-gray-400">
            Rating: {movie.vote_average.toFixed(1)} | Release Date: {movie.release_date}
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 mt-4">
          <img
            className="w-full h-64 object-cover rounded-lg"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <p className="text-gray-300">{movie.overview}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MovieDetailsButton;
