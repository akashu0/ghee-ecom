import React, { useState, useEffect } from 'react';
import img2 from "/ghee2.jpg";
import img3 from "/ghee4.jpg";
import img4 from "/ghhe5.jpg";

const images = [
  { src: img2 },
  { src: img3 },
  { src: img4 }
];

export default function CarouselBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className="relative mx-auto my-10 w-full max-w-[1450px] h-[500px] overflow-hidden">
      <div
        className="flex transition-transform duration-700 "
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={image.src}
              alt={`Slide ${index + 1}`}
              className="w-full h-[500px] object-cover rounded-md"
            />
            <div className="absolute bottom-10 left-10 text-white">
              {/* Optional: Add any text overlay here */}
            </div>
          </div>
        ))}
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
