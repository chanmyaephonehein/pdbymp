import { useRouter } from "next/router";
import React from "react";

const SolutionCard = ({ title, content, list, button, route, id }) => {
  const router = useRouter();

  return (
    <div className="rounded-lg shadow-lg w-full sm:w-4/5 md:w-2/3 lg:w-1/3 h-auto flex flex-col items-center justify-between px-5 py-6">
      <div className="flex flex-col">
        <p className="text-xl text-center pb-4 px-4 font-semibold">{title}</p>
        <p className="pb-4 text-lg px-4 text-justify">{content}</p>
        <ul className="list-disc pl-6 md:pl-10">
          {list &&
            list.map((item, index) => (
              <li key={index} className="text-md">
                {item}
              </li>
            ))}
        </ul>
      </div>
      {id === 1 ? (
        <button
          onClick={() => router.push(route)}
          className="bg-gray-700 p-3 text-white rounded-md hover:bg-gray-900 mt-4"
        >
          {button}
        </button>
      ) : (
        <button className="bg-gray-700 p-3 text-white rounded-md hover:bg-gray-900 mt-4">
          {button}
        </button>
      )}
    </div>
  );
};

export default SolutionCard;
