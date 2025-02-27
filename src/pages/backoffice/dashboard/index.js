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

  // Function to Handle Status Change
  const handleStatusChange = (index, newStatus) => {
    setData((prevData) =>
      prevData.map((item, i) =>
        i === index ? { ...item, status: newStatus } : item
      )
    );
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
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Email</th>
            <th className="p-3 border">Country</th>
            <th className="p-3 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border">
              <td className="p-3 border">{item.name}</td>
              <td className="p-3 border">{item.email}</td>
              <td className="p-3 border">{item.country}</td>
              <td className="p-3 border flex justify-between items-center">
                <select
                  value={item.status}
                  onChange={(e) => handleStatusChange(index, e.target.value)}
                  className={`p-2 border rounded-md font-semibold ${getStatusColor(
                    item.status
                  )}`}
                >
                  <option
                    value="PENDING"
                    className="bg-yellow-200 text-yellow-800"
                  >
                    PENDING
                  </option>
                  <option
                    value="IN_PROGRESS"
                    className="bg-blue-200 text-blue-800"
                  >
                    IN PROGRESS
                  </option>
                  <option
                    value="RESOLVED"
                    className="bg-green-200 text-green-800"
                  >
                    RESOLVED
                  </option>
                </select>
                <CiSquareMore className="text-3xl cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
