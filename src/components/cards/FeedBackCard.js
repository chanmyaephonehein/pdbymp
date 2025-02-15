import React from "react";

const FeedbackCard = ({ industry, rating, feedback, author }) => {
  return (
    <div className=" rounded-lg p-6 shadow-md max-w-md text-center">
      <div className="flex justify-center mb-4">
        <div className="w-12 h-12 border border-gray-500 rounded-full flex items-center justify-center">
          <span className="text-gray-500 text-xl">👤</span>
        </div>
      </div>
      <p className="text-gray-700 font-semibold">Industry: {industry}</p>
      <div className="flex justify-center my-2">
        {Array.from({ length: rating }).map((_, index) => (
          <span key={index} className="text-black">
            ★
          </span>
        ))}
      </div>
      <p className="text-gray-700 italic">{feedback}</p>
      <p className="text-gray-900 font-semibold mt-4">– {author}</p>
    </div>
  );
};

export default FeedbackCard;
