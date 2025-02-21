import Select from "react-select";
import countryList from "react-select-country-list";
import { useState } from "react";

const ContactUs = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const countries = countryList().getData();
  return (
    <div className="flex justify-center px-4 sm:px-8 md:px-16 lg:px-24 ">
      <div className="w-full bg-gray-900 p-8 flex flex-col md:flex-row items-center md:items-start">
        {/* Left Section */}
        <div className="w-full md:w-1/2 text-white pr-0 md:pr-8 flex flex-col items-center mt-10 md:mt-20 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Let’s Build the Future Together
          </h2>
          <p className="text-lg w-full sm:w-3/4 md:w-3/4">
            Have a question or a project in mind? Reach out to us! Our team is
            ready to help you innovate with AI-powered solutions.
          </p>
        </div>

        {/* Right Section (Form) */}
        <div className="w-full md:w-1/2 lg:w-1/3 bg-gray-100 p-6 rounded-lg mt-8 md:mt-0">
          <form>
            <label className="block text-sm font-medium">Name</label>
            <input type="text" className="w-full p-2 mb-3 border rounded-md" />

            <label className="block text-sm font-medium">Email</label>
            <input type="email" className="w-full p-2 mb-3 border rounded-md" />

            <label className="block text-sm font-medium">Phone</label>
            <input type="tel" className="w-full p-2 mb-3 border rounded-md" />

            <label className="block text-sm font-medium">Company Name</label>
            <input type="text" className="w-full p-2 mb-3 border rounded-md" />

            <div>
              <label className="block text-sm font-medium">Country</label>
              <Select
                options={countries}
                value={selectedCountry}
                onChange={setSelectedCountry}
                placeholder="Select a country"
                className="w-full text-black p-2 mb-3 border rounded-md"
              />
            </div>

            <label className="block text-sm font-medium">Job Title</label>
            <input type="text" className="w-full p-2 mb-3 border rounded-md" />

            <label className="block text-sm font-medium">Job Details</label>
            <textarea className="w-full p-2 mb-3 border rounded-md h-20"></textarea>

            <button className="w-full bg-gray-700 text-white p-2 rounded-md hover:bg-gray-800">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
