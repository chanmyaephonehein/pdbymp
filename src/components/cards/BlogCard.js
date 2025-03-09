// import { isAbsoluteUrl } from "next/dist/shared/lib/utils";
import { useRouter } from "next/router";
import React from "react";

const BlogCard = ({ url, title, content, route }) => {
  const router = useRouter();
  return (
    <div className="w-full max-w-sm p-4 bg-white rounded-lg shadow-lg md:max-w-md lg:max-w-lg">
      <img
        src={url}
        alt={title}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="mt-4 text-lg font-semibold text-gray-800 sm:text-xl">
        {title}
      </h2>
      <p className="mt-2 text-sm text-gray-600 sm:text-base">{content}</p>
      <div>
        <button
          className="text-md mt-5 underline hover:text-blue-600"
          onClick={() => router.push({ pathname: `${route}` })}
        >
          Read post
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
