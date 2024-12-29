'use client';

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useEffect, useState } from 'react';

const MyCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Placeholder items (you can replace these with actual images or content)
  const items = [
    <img
      className="w-full h-auto sm:h-[360px] md:h-[400px] lg:h-[450px] object-fit object-center"
      src="https://collider.com/wp-content/uploads/dark-knight-rises-movie-poster-banner-catwoman.jpg"
      alt="slide1"
    />,
    <img
      className="w-full h-auto sm:h-[360px] md:h-[400px] lg:h-[450px] object-cover object-center"
      src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5bd88a57235929.59d46e946a25b.jpg"
      alt="slide2"
    />,
    <img
      className="w-full h-auto sm:h-[360px] md:h-[400px] lg:h-[450px] object-fill object-center"
      src="https://justplayproducts.com/wp-content/uploads/2024/04/InsideOut2_S24_Banners_Button_1_JP_AMZ_RH-1200x240@2x.jpg"
      alt="slide3"
    />,
    <img
      className="w-full h-auto sm:h-[360px] md:h-[400px] lg:h-[450px] object-fill object-center"
      src="https://ovicio.com.br/wp-content/uploads/DLY7AhuXcAASPQ0.jpg"
      alt="slide4"
    />,
    <img
      className="w-full h-auto sm:h-[360px] md:h-[400px] lg:h-[450px] object-fill object-center"
      src="https://pbs.twimg.com/media/GOmWsM2XsAAKvy4?format=jpg&name=large"
      alt="slide4"
    />,
    <img
      className="w-full h-auto sm:h-[360px] md:h-[400px] lg:h-[450px] object-fill object-center"
      src="https://whiteriverstatepark.org/wp-content/uploads/DP3-IMAX-wide-edit-jpg.webp"
      alt="slide4"
    />

  ];

  // Auto-slide logic with a delay of 2000ms
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 2000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [items.length]);

  return (
    <div className="relative w-full max-w-full mx-auto overflow-hidden  shadow-lg">
      {/* Carousel Component */}
      <Carousel>
        <CarouselContent
          className="flex transition-transform duration-1000"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <CarouselItem
              key={index}
              className="flex-shrink-0 w-full h-[200px] sm:h-[400px] md:h-[450px] lg:h-[500px] flex items-center justify-center bg-black text-gray-700 text-xl font-semibold"
            >
              {item}
            </CarouselItem>
          ))}
        </CarouselContent>       
      </Carousel>
    </div>

  );
};

export default MyCarousel;
