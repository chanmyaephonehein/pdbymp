import React from "react";

const SolutionCard = ({ title, content, list, button }) => {
  return (
    <div className="rounded-lg shadow-lg w-2/5 h-96  flex flex-col items-center justify-between px-4 py-10">
      <div className="flex flex-col">
        <p className="text-3xl align-center pb-5 text-center px-10">{title}</p>
        <p className="pb-4 text-lg px-4 text-justify">{content}</p>
        <ul className="list-disc pl-24">
          {list.map((item, index) => (
            <li key={index} className="text-md ">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <button className="bg-gray-700 p-3 text-white rounded-md hover:bg-gray-900">
        {button}
      </button>
    </div>
  );
};

export default SolutionCard;
