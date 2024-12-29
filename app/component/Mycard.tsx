// demo
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';



const MyCard = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {/* Card 1 */}
      <Card className="w-80 bg-gradient-to-b from-gray-800 to-gray-900 text-white shadow-lg rounded-lg hover:scale-105 transition-transform duration-300">
        {/* Card Header */}
        <CardHeader>
          <img
            className="h-48 w-full object-cover rounded-t-lg"
            src="https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg"
            alt="Movie Poster"
          />
        </CardHeader>

        {/* Card Content */}
        <CardContent className="p-4">
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl font-bold">Inception</CardTitle>
            <div className="flex items-center text-yellow-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 17.27l6.18 3.73-1.64-7.19L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.57L5.82 21z"></path>
              </svg>
              <span className="ml-1 text-sm">8.8</span>
            </div>
          </div>
          <CardDescription className="mt-2 text-gray-400 text-sm">
            A skilled thief leads a dangerous heist in the world of dreams.
          </CardDescription>
        </CardContent>

        {/* Card Footer */}
        <CardFooter className="p-4 flex flex-col items-start space-y-2">
          <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            Watch Now
          </button>
          <span className="text-gray-400 text-sm">Free to Watch</span>
        </CardFooter>
      </Card>

      {/* Card 2 */}
      <Card className="w-80 bg-gradient-to-b from-gray-800 to-gray-900 text-white shadow-lg rounded-lg hover:scale-105 transition-transform duration-300">
        {/* Card Header */}
        <CardHeader>
          <img
            className="h-48 w-full object-cover rounded-t-lg"
            src="https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg"
            alt="Movie Poster"
          />
        </CardHeader>

        {/* Card Content */}
        <CardContent className="p-4">
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl font-bold">Interstellar</CardTitle>
            <div className="flex items-center text-yellow-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 17.27l6.18 3.73-1.64-7.19L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.57L5.82 21z"></path>
              </svg>
              <span className="ml-1 text-sm">8.6</span>
            </div>
          </div>
          <CardDescription className="mt-2 text-gray-400 text-sm">
            A team of explorers travels through a wormhole to ensure humanity's survival.
          </CardDescription>
        </CardContent>

        {/* Card Footer */}
        <CardFooter className="p-4 flex flex-col items-start space-y-2">
          <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            Watch Now
          </button>
          <span className="text-gray-400 text-sm">Free to Watch</span>
        </CardFooter>
      </Card>
    </div>
  );
};

export default MyCard;

      


