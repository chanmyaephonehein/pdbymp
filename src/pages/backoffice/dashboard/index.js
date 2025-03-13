import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CiSquareMore } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import useAuth from "../../../utils/authMiddleware";

const Dashboard = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const isAuthenticated = useAuth();

  const fetchAllData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/inquries`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      setData(responseData);
      console.log(responseData);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  // Function to Handle Status Change
  const handleStatusChange = async (id, newStatus) => {
    // Update state optimistically
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      )
    );

    // Send update request to the API
    try {
      const response = await fetch(`http://localhost:3000/api/inquries`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }), // Use 'id' instead of 'index'
      });

      if (!response.ok) {
        throw new Error("Failed to update status");
      }

      const updatedInquiry = await response.json();
      console.log("Updated Inquiry:", updatedInquiry);
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  // Function to Get Color Based on Status
  const getStatusColor = (status) => {
    switch (status) {
      case "PENDING":
        return "bg-yellow-200 text-yellow-800";
      case "IN_PROGRESS":
        return "bg-blue-200 text-blue-800";
      case "RESOLVED":
        return "bg-green-200 text-green-800";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  if (!isAuthenticated) return null;

  return (
    <div className="overflow-x-auto p-6">
      {" "}
      <div className="flex items-center  justify-center w-full pb-8">
        <input
          type="text"
          placeholder="Search"
          className="w-[150px] lg:w-[400px] p-2 border border-gray-300 rounded-md mr-2"
        />
        <div className="border border-gray-300 p-3 rounded-md cursor-pointer hover:bg-mainColor">
          <FaSearch />
        </div>
      </div>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Email</th>
            <th className="p-3 border">Country</th>
            <th className="p-3 border">Status</th>
            <th className="p-3 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item) => (
              <tr key={item.id} className="border">
                <td className="p-3 border">{item.name}</td>
                <td className="p-3 border">{item.email}</td>
                <td className="p-3 border">{item.country}</td>
                <td className="p-3 border">
                  <select
                    value={item.status}
                    onChange={(e) =>
                      handleStatusChange(item.id, e.target.value)
                    } // Using item.id instead of index
                    className={`p-2 border rounded-md font-semibold ${getStatusColor(
                      item.status
                    )}`}
                  >
                    <option value="PENDING">PENDING</option>
                    <option value="IN_PROGRESS">IN PROGRESS</option>
                    <option value="RESOLVED">RESOLVED</option>
                  </select>
                </td>
                <td className="p-3 border text-center">
                  <CiSquareMore
                    className="text-3xl cursor-pointer"
                    onClick={() =>
                      router.push(`/backoffice/dashboard/${item.id}`)
                    }
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
