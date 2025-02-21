import React, { useState } from "react";

const images = [
  { id: 1, url: "/image9.png" },
  { id: 2, url: "/image10.png" },
  { id: 3, url: "/image11.png" },
  { id: 4, url: "/image12.png" },
  { id: 5, url: "/image13.png" },
  { id: 6, url: "/image14.png" },
];

const Gallery = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleImages = images.slice(startIndex, startIndex + 3);

  const handleNext = () => {
    if (startIndex + 3 < images.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-24 ">
      <p className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-10 text-center">
        Exploring AI Solution
      </p>
      <p className="text-center max-w-2xl mb-6">
        Step into the world of AI-Solutions through our gallery. From
        groundbreaking product demos to industry events and team collaborations,
        these snapshots capture our journey of transforming the digital employee
        experience with AI-powered solutions.
      </p>
      <div className="flex items-center space-x-4">
        {startIndex > 0 && (
          <button className="p-2 bg-gray-300 rounded-full" onClick={handlePrev}>
            ◀
          </button>
        )}
        <div className="flex space-x-4 items-center">
          {visibleImages.map((image, index) => (
            <img
              key={image.id}
              src={image.url}
              alt={`Slide ${image.id}`}
              className={`rounded-lg transition-all duration-300 w-24 sm:w-32 md:w-48 lg:w-64 h-auto ${
                index === 1 ? "scale-110" : ""
              }`}
            />
          ))}
        </div>
        {startIndex + 3 < images.length && (
          <button className="p-2 bg-gray-300 rounded-full" onClick={handleNext}>
            ▶
          </button>
        )}
      </div>
    </div>
  );
};

export default Gallery;
