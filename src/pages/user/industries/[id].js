import { useRouter } from "next/router";
import React, { useEffect } from "react";

const EachIndustry = () => {
  const router = useRouter();
  const queryId = router.query.id;

  return (
    <div className="mx-auto px-4 sm:px-8 md:px-16 lg:px-24  text-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
        Revolutionizing Finance with AI-Powered Solutions
      </h1>
      <p className="text-gray-600 mb-10 px-4 sm:px-10 md:px-20">
        AI-Solutions empowers financial institutions to stay ahead in a
        competitive, data-driven market. Our AI tools enhance fraud detection,
        streamline risk assessment, and automate customer service, enabling
        faster, more secure decision-making. From predictive analytics to
        intelligent automation, we help banks, investment firms, and fintech
        companies unlock new levels of efficiency and innovation.
      </p>

      {/* Image Placeholder */}
      <div className="flex items-center justify-center mb-6">
        <img
          src="/image19.png"
          className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 rounded-lg"
        />
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-6 text-left mx-auto max-w-5xl">
        {/* Use Case Section */}
        <div className="shadow-lg p-4 rounded-lg w-full md:w-1/2 flex flex-col gap-1">
          <h2 className="text-lg font-semibold mb-2">Use Case</h2>
          <p>
            <strong>Client:</strong> Global Finance Hub
          </p>
          <p>
            <strong>Challenge:</strong> Needed a solution to detect fraudulent
            transactions in real-time.
          </p>
          <p>
            <strong>Solution:</strong> AI-Solutions implemented an AI-driven
            fraud detection system that reduced fraudulent activity by 40%
            within the first six months.
          </p>
          <p>
            <strong>Feedback:</strong> AI-Solutions tools have saved us millions
            and improved our operational efficiency. Their team is a true
            partner in innovation.
            <br />- Emily Zhang, Head of Risk Management, Global Finance Hub
          </p>
        </div>

        {/* Why This Works Section */}
        <div className="shadow-lg p-4 rounded-lg w-full md:w-1/2">
          <h2 className="text-lg font-semibold mb-2">Why This Works</h2>
          <ol className="list-decimal list-inside">
            <li>
              <strong>Industry-Specific:</strong> Addresses the unique needs of
              the finance sector (e.g., fraud detection, compliance).
            </li>
            <li>
              <strong>Measurable Impact:</strong> Highlights tangible results
              (e.g., 40% reduction in fraud).
            </li>
            <li>
              <strong>Client-Centric:</strong> Includes a real-world example and
              testimonial to build credibility.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default EachIndustry;
