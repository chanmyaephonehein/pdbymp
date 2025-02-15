import { useRouter } from "next/router";
import React from "react";

const IndustryImgCard = ({ source, title, route }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push({ pathname: `${route}` })}
      className="bg-gray-700 rounded-lg p-4 cursor-pointer"
    >
      <img src={source} className="w-full rounded-lg" alt={title} />
      <div className="flex justify-center mt-2">
        <p className="text-xl font-semibold text-white">{title}</p>
      </div>
    </div>
  );
};

export default IndustryImgCard;
