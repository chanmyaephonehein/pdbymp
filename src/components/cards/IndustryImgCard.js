import { useRouter } from "next/router";
import React from "react";

const IndustryImgCard = ({ source, title, route }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push({ pathname: `${route}` })}
      className="bg-gray-700 rounded-lg p-4 cursor-pointer w-full max-w-xs md:max-w-sm lg:max-w-md"
    >
      <img
        src={source}
        className="w-full h-32 md:h-40 lg:h-48 object-cover rounded-lg"
        alt={title}
      />
      <div className="flex justify-center mt-2">
        <p className="text-lg md:text-xl font-semibold text-white">{title}</p>
      </div>
    </div>
  );
};

export default IndustryImgCard;
