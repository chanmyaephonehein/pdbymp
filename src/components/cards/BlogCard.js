import { isAbsoluteUrl } from "next/dist/shared/lib/utils";
import { useRouter } from "next/router";
import React from "react";

const BlogCard = ({ url, title, content, route }) => {
  const router = useRouter();
  return (
    <div className="shadow-lg rounded-lg p-4 max-w-md flex flex-col justify-between h-[550px]">
      <div className="flex flex-col gap-3">
        <img src={url} className="w-full h-64 rounded-lg" alt={title} />
        <p className="text-xl">{title}</p>
        <p className="text-gray-700">{content}</p>
      </div>
      <div>
        <button
          className="text-md hover:underline"
          onClick={() => router.push({ pathname: `${route}` })}
        >
          Read post
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
