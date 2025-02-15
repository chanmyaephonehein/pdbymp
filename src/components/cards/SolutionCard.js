import { useRouter } from "next/router";
import React from "react";

const SolutionCard = ({ title, content, list, button, route }) => {
  const router = useRouter();
  return (
    <div className="rounded-lg shadow-lg w-2/5 h-96  flex flex-col items-center justify-between px-5 py-6">
      <div className="flex flex-col">
        <p className="text-xl align-center pb-4 text-center px-8 font-semibold">
          {title}
        </p>
        <p className="pb-4 text-lg px-4 text-justify">{content}</p>
        <ul className="list-disc pl-24">
          {list.map((item, index) => (
            <li key={index} className="text-md ">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={() => router.push({ pathname: `/user/solutions/${route}` })}
        className="bg-gray-700 p-3 text-white rounded-md hover:bg-gray-900"
      >
        {button}
      </button>
    </div>
  );
};

export default SolutionCard;
