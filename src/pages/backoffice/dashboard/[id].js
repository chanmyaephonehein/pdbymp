"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FiDownload } from "react-icons/fi";

const ManagementDetail = () => {
  const router = useRouter();
  const { id } = router.query; // Get dynamic ID from query params
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return; // Wait for the id to be available

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`http://localhost:3000/api/inquries?id=${id}`, {
          headers: { "Content-Type": "application/json" },
        });
        const result = await res.json();

        if (!res.ok) throw new Error(result.error || "Data not found");
        setData(result);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    fetchData();
  }, [id]); // Fetch data when `id` changes

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (error) return <p className="text-center text-lg text-red-500">{error}</p>;
  if (!data) return <p className="text-center text-lg">No data found.</p>;

  return (
    <div className="flex flex-col  min-h-screen p-6">
      {/* Back Button (Now Visible) */}
      <div className="w-full max-w-lg">
        <button
          className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-900 mb-4"
          onClick={() => router.push("/backoffice/dashboard")} // Navigate back to dashboard
        >
          ← Back
        </button>
      </div>

      {/* Data Display */}
      <div className="flex justify-center items-center">
        <div className=" p-6 rounded-md shadow-md w-full max-w-lg">
          {Object.entries(data).map(([key, value]) => (
            <p className="mb-4" key={key}>
              <strong className="capitalize">
                {key.replace(/([A-Z])/g, " $1")}:
              </strong>{" "}
              {value}
            </p>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center">
        <button className="bg-gray-700 flex items-center text-white px-6 py-2 mt-4 rounded-md gap-2">
          <FiDownload /> Download
        </button>
      </div>
    </div>
  );
};

export default ManagementDetail;
