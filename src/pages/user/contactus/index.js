const ContactUs = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full  bg-gray-900 p-8  flex">
        {/* Left Section */}
        <div className="w-1/2 text-white pr-8 flex flex-col items-center mt-20">
          <h2 className="text-2xl font-bold mb-4 ">
            Let’s Build the Future Together
          </h2>
          <p className="text-lg w-3/4 text-center">
            Have a question or a project in mind? Reach out to us! Our team is
            ready to help you innovate with AI-powered solutions.
          </p>
        </div>

        {/* Right Section (Form) */}

        <div className="w-1/3 bg-gray-100 p-6 rounded-lg mx-auto">
          <form>
            <label className="block text-sm font-medium">Name</label>
            <input type="text" className="w-full p-2 mb-3 border rounded-md" />

            <label className="block text-sm font-medium">Email</label>
            <input type="email" className="w-full p-2 mb-3 border rounded-md" />

            <label className="block text-sm font-medium">Phone</label>
            <input type="tel" className="w-full p-2 mb-3 border rounded-md" />

            <label className="block text-sm font-medium">Company Name</label>
            <input type="text" className="w-full p-2 mb-3 border rounded-md" />

            <label className="block text-sm font-medium">Country</label>
            <select className="w-full p-2 mb-3 border rounded-md">
              <option>Select a country</option>
              <option>USA</option>
              <option>UK</option>
              <option>Canada</option>
            </select>

            <label className="block text-sm font-medium">Job Title</label>
            <input type="text" className="w-full p-2 mb-3 border rounded-md" />

            <label className="block text-sm font-medium">Job Details</label>
            <textarea className="w-full p-2 mb-3 border rounded-md h-20"></textarea>

            <button className="w-full bg-gray-700 text-white p-2 rounded-md">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
