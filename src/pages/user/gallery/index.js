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
    <div className="flex flex-col h-screen items-center">
      <p className="text-2xl font-semibold mb-10">Exploring AI Solution</p>
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
              className={`rounded-lg transition-all duration-300 ${
                index === 1 ? "w-96 h-96" : "w-64 h-64"
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
