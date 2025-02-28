"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios"; // Assuming you're using Axios for API calls
import { FiDownload } from "react-icons/fi";

const ManagementDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {}, []);

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (!data) return <p className="text-center text-lg">No data found.</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="bg-gray-200 p-6 rounded-md shadow-md w-full max-w-lg">
        <p className="mb-2">
          <strong>Name:</strong> {data.name}
        </p>
        <p className="mb-2">
          <strong>Email:</strong> {data.email}
        </p>
        <p className="mb-2">
          <strong>Phone:</strong> {data.phone}
        </p>
        <p className="mb-2">
          <strong>Company Name:</strong> {data.companyName}
        </p>
        <p className="mb-2">
          <strong>Country:</strong> {data.country}
        </p>
        <p className="mb-2">
          <strong>Job Title:</strong> {data.jobTitle}
        </p>
        <p className="mb-2">
          <strong>Job Details:</strong>
        </p>
        <p className="mb-4">{data.jobDetails}</p>
      </div>

      <button className="bg-gray-700 text-white px-6 py-2 mt-4 rounded-md flex items-center gap-2">
        <FiDownload /> Download
      </button>
    </div>
  );
};

export default ManagementDetail;
