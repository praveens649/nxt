import { toast } from 'sonner'; // Import the toast function
import { Button } from '@/components/ui/button';

interface WatchlistButtonProps {
  onToggleWatchlist: () => void; // Prop for toggling watchlist
}

const WatchlistButton: React.FC<WatchlistButtonProps> = ({ onToggleWatchlist }) => {
  const handleClick = () => {
    onToggleWatchlist(); // Call the parent-provided function
    toast.success('Movie added to watchlist successfully!'); // Show success notification
  };

  return (
    <Button
      onClick={handleClick}
      className="w-32 rounded-md bg-black hover:bg-gray-700 focus:ring-2 focus:ring-red-400 focus:outline-none"
    >
      Add to Watchlist
    </Button>
  );
};

export default WatchlistButton;
