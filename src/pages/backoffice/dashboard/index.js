import { useState } from "react";
import { CiSquareMore } from "react-icons/ci";

const Dashboard = () => {
  const [data, setData] = useState([
    {
      name: "Kyra",
      email: "Kyra2025@gmail.com",
      country: "Myanmar",
      status: "PENDING",
    },
    {
      name: "Jasmine",
      email: "Jasmine2024@gmail.com",
      country: "Singapore",
      status: "IN_PROGRESS",
    },
    {
      name: "Frank",
      email: "Frank225@gmail.com",
      country: "Singapore",
      status: "RESOLVED",
    },
  ]);

  const [openDropdown, setOpenDropdown] = useState(null);

  // Function to Handle Status Change
  const handleStatusChange = (index, newStatus) => {
    setData((prevData) =>
      prevData.map((item, i) =>
        i === index ? { ...item, status: newStatus } : item
      )
    );
  };

  // Function to Delete an Entry
  const handleDelete = (index) => {
    setData((prevData) => prevData.filter((_, i) => i !== index));
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

  return (
    <div className="overflow-x-auto p-6">
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
          {data.map((item, index) => (
            <tr key={index} className="border">
              <td className="p-3 border">{item.name}</td>
              <td className="p-3 border">{item.email}</td>
              <td className="p-3 border">{item.country}</td>
              <td className="p-3 border">
                <select
                  value={item.status}
                  onChange={(e) => handleStatusChange(index, e.target.value)}
                  className={`p-2 border rounded-md font-semibold ${getStatusColor(
                    item.status
                  )}`}
                >
                  <option value="PENDING">PENDING</option>
                  <option value="IN_PROGRESS">IN PROGRESS</option>
                  <option value="RESOLVED">RESOLVED</option>
                </select>
              </td>
              <td className="p-3 border relative">
                <div className="relative">
                  <CiSquareMore
                    className="text-3xl cursor-pointer"
                    onClick={() =>
                      setOpenDropdown(openDropdown === index ? null : index)
                    }
                  />
                  {openDropdown === index && (
                    <div className="absolute right-0 mt-2 w-32 bg-white border shadow-md rounded-md z-50">
                      <button
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                        onClick={() => alert("Edit action")}
                      >
                        Edit
                      </button>
                      <button
                        className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
